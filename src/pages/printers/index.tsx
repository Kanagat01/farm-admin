import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { WebSocketContext } from "~/app/providers";
import { FilterPrinters } from "~/features";
import { PrintedModal } from "~/widgets";
import { apiInstance, createResource } from "~/shared/api";
import { dateToString, useSocket } from "~/shared/lib";
import { Table } from "~/shared/ui";
import { API_URL } from "~/shared/config";

const resource = createResource("/api_admin/get_printer_requests/?page=1");

export default function Printers() {
  const websocket = useContext(WebSocketContext);
  let firstPageData = resource.read().message;
  const [data, setData] = useState<any[]>(firstPageData);

  const removeObj = (objToRemove: any) => {
    setData(data.filter((obj) => obj !== objToRemove));
  };

  useEffect(() => {
    let isMounted = true;
    let loadPages = true;

    const fetchData = (page: number) => {
      apiInstance
        .get(`/api_admin/get_printer_requests/?page=${page}`)
        .then((response) => {
          let responseData: any[] = response.data.message;
          if (page === 1) {
            setData(responseData);
            const onClose = () => {
              if (isMounted) {
                toast.error("Сокет отключен. Перезагрузите страницу");
              }
            };
            useSocket(websocket, setData, onClose);
          } else {
            setData((prevData) => [...prevData, ...responseData]);
          }
          if (responseData.length < 40) {
            loadPages = false;
          } else {
            fetchData(page + 1);
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            loadPages = false;
          }
        });
    };

    fetchData(2);

    return () => {
      isMounted = false;
    };
  }, []);

  const columns = [
    "ID",
    "Модель",
    "Статус",
    "ID заказа",
    "ID пользователя",
    "Пользователь",
    "Дата создания",
    "Готовы все уровни",
    "Напечатано",
  ];
  const tableData = [
    ...data.map((obj: any, index: number) => {
      return [
        ...[
          "printing_model_id",
          "model_name",
          "status",
          "order_id",
          "owner_id",
          "owner_name",
          "created_date",
          "is_all_levels_done",
          "is_printed",
        ].map((key) => {
          if (key === "model_image") {
            return (
              <a
                href={API_URL + obj[key]}
                target="_blank"
                className="table-link"
              >
                Смотреть изображение
              </a>
            );
          } else if (key === "created_date") {
            return dateToString(obj.created_date);
          } else if (key === "is_all_levels_done") {
            return obj[key] ? "Да" : "Нет";
          } else if (key === "is_printed") {
            return (
              <PrintedModal id={index} printerObj={obj} removeObj={removeObj} />
            );
          }
          return obj[key];
        }),
      ];
    }),
  ];

  return (
    <>
      <div className="table-title my-4">Информация о принтерах</div>

      <ToastContainer />
      <FilterPrinters setData={setData} />
      <Table columns={columns} data={tableData} />
    </>
  );
}
