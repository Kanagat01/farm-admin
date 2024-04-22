import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

import { WebSocketContext } from "~/app/providers";
import { DeliverySentModal, UserInfo } from "~/widgets";
import { apiInstance } from "~/shared/api";
import { dateToString, useSocket } from "~/shared/lib";
import { Preloader, Table } from "~/shared/ui";
import { CategoryFilter } from "~/features";

export default function Logistics() {
  const { socket } = useContext(WebSocketContext);
  const [allData, setAllData] = useState<any[]>([]);
  const [tableData, setTableData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [selectedOption, setSelectedOption] = useState("Все");
  const options = ["Все", "Ферма", "3D"];
  const ordersFilter = (optionText: string) => {
    setSelectedOption(optionText);
    let newData;
    if (optionText === "Ферма") {
      newData = allData.filter((obj: any) => obj.item_type === "farm");
    } else if (optionText === "3D") {
      newData = allData.filter((obj: any) => obj.item_type === "printer");
    } else {
      newData = allData;
    }
    setTableData(getTableData(newData));
  };

  const removeObj = (delivery_order_id: number) => {
    setAllData((prevData) => [
      ...prevData.filter((obj: any) => obj.id !== delivery_order_id),
    ]);
    setTableData((prevData) => [
      ...prevData.filter((obj) => obj[0] !== delivery_order_id),
    ]);
  };
  useEffect(() => {
    let isMounted = true;
    let loadPages = true;

    const fetchData = (page: number) => {
      apiInstance
        .get(`/api_admin/get_delivery_orders/?page=${page}`)
        .then((response) => {
          const responseData = response.data.message;
          const tableData = getTableData(responseData);
          if (page === 1) {
            setAllData(responseData);
            setTableData(tableData);
            const onClose = () => {
              if (isMounted) {
                toast.error("Сокет отключен. Перезагрузите страницу");
              }
            };
            const addNewData = (newData: any) => {
              setAllData((prevData) => [...prevData, newData]);
              newData = getTableData([newData]);
              setSelectedOption((currentOption: string) => {
                if (currentOption === "Ферма") {
                  newData = newData.filter(
                    (obj: any) => obj.item_type === "farm"
                  );
                } else if (currentOption === "3D") {
                  newData = newData.filter(
                    (obj: any) => obj.item_type === "printer"
                  );
                }
                setTableData((prevData) => [...prevData, ...newData]);
                return currentOption;
              });
            };
            useSocket(socket, addNewData, onClose);
            setIsLoading(false);
          } else {
            setAllData((prevData) => [...prevData, ...responseData]);
            setTableData((prevData) => [...prevData, ...tableData]);
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

  const getTableData = (data: any) => {
    return [
      ...data.map((order: any) => [
        order.id,
        <UserInfo id={order.id} user={order.owner} />,
        order.recipient_name,
        order.recipient_phone,
        order.recipient_address,
        order.item_id,
        order.name_of_the_product,
        order.item_type === "printer" ? "3D" : "Ферма",
        dateToString(order.created_date),
        <DeliverySentModal
          delivery_order_id={order.id}
          removeObj={removeObj}
        />,
      ]),
    ];
  };

  const orderCols = [
    "ID доставки",
    "Владелец",
    "Имя покупателя",
    "Номер телефона",
    "Адрес доставки",
    "ID продукта",
    "Название продукта",
    "Категория продукта",
    "Дата создания",
    "Отправлено",
  ];

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <ToastContainer />
      <div className="table-title my-4">Информация о доставках</div>
      <div
        className="d-flex align-items-center my-4 flex-wrap"
        style={{ gap: "1rem" }}
      >
        <CategoryFilter
          options={options}
          selectedOption={selectedOption}
          ordersFilter={ordersFilter}
        />
      </div>
      <Table columns={orderCols} data={tableData} />
    </>
  );
}
