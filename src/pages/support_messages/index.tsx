import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { WebSocketContext } from "~/app/providers";
import { ResolveModal } from "~/widgets";
import { apiInstance } from "~/shared/api";
import { dateToString, useSocket } from "~/shared/lib";
import { Table } from "~/shared/ui";

export default function SupportMessages() {
  const websocket = useContext(WebSocketContext);
  const [data, setData] = useState<any[]>([]);

  const removeObj = (message_id: number) => {
    setData(data.filter((obj: any) => obj.id !== message_id));
  };

  useEffect(() => {
    let isMounted = true;
    let loadPages = true;

    const fetchData = (page: number) => {
      apiInstance
        .get(`/api_admin/get_support_messages/?page=${page}`)
        .then((response) => {
          if (page === 1) {
            setData(response.data.message);
            const onClose = () => {
              if (isMounted) {
                toast.error("Сокет отключен. Перезагрузите страницу");
              }
            };
            useSocket(websocket, setData, onClose);
          } else {
            setData((prevData) => [...prevData, ...response.data.message]);
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

    fetchData(1);

    return () => {
      isMounted = false;
    };
  }, []);

  const columns = [
    "ID обращения",
    "ID пользователя",
    "Имя",
    "Номер телефона",
    "Почта",
    "Дата создания",
    "Сообщение",
    "Проблема решена",
  ];
  const tableData = [
    ...data.map((obj: any) => {
      return [
        ...[
          "id",
          "user_id",
          "user_name",
          "user_phone",
          "user_email",
          "created_date",
          "message",
          "resolve",
        ].map((key) => {
          if (key === "created_date") {
            return dateToString(obj.created_date);
          } else if (key === "message") {
            return obj.message.length > 30
              ? obj.message.slice(0, 30) + "..."
              : obj.message;
          } else if (key === "resolve") {
            return (
              <ResolveModal
                message_id={obj.id}
                message={obj.message}
                removeObj={removeObj}
              />
            );
          }
          return obj[key] || obj[key] === 0 ? obj[key] : "Отсутствует";
        }),
      ];
    }),
  ];
  return (
    <>
      <div className="table-title my-4">Обращения в поддержку</div>
      <ToastContainer />
      <Table columns={columns} data={tableData} />
    </>
  );
}
