import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { WebSocketContext } from "~/app/providers";
import { ModelInfo, PrintedModal, UserInfo } from "~/widgets";
import { apiInstance, createResource } from "~/shared/api";
import { dateToString, useSocket } from "~/shared/lib";
import { Table } from "~/shared/ui";
import { Printer, PrinterHeaders } from "~/entities";

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
          if (page === 2) {
            const onClose = () => {
              if (isMounted) {
                toast.error("Сокет отключен. Перезагрузите страницу");
              }
            };
            useSocket(websocket, setData, onClose);
            setData(responseData);
          } else {
            setData((prevData) => [...prevData, ...responseData]);
          }
          if (responseData.length < 40) {
            loadPages = false;
          }
          if (loadPages) {
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

  const tableData = [
    ...data.map((obj: Printer, index) => {
      return [
        <ModelInfo model={obj.model} />,
        dateToString(obj.created_date),
        obj.is_all_levels_done ? "Да" : "Нет",
        obj.owner ? <UserInfo id={index} user={obj.owner} /> : "Отсутствует",
        <PrintedModal id={index} printerObj={obj} removeObj={removeObj} />,
      ];
    }),
  ];

  return (
    <>
      <div className="table-title my-4">Информация о принтерах</div>
      <ToastContainer />
      <Table columns={PrinterHeaders} data={tableData} />
    </>
  );
}
