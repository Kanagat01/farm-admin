import { useState } from "react";

import { MarketplaceTrends, Purchases, Revenue } from "~/widgets";
import { createResource } from "~/shared/api";
import { dateToString } from "~/shared/lib";
import { DropdownCategories } from "~/shared/ui";
import { Table } from "~/shared/ui";

const resource = createResource("/api_admin/get_marketplace_data/");

export default function Marketplace() {
  const columns = [
    "Имя пользователя",
    "ID профиля",
    "Название продукта",
    "Цена",
    "Действие",
    "Дата создания",
  ];
  const getTableData = (data: any) => {
    return [
      ...data.map((operation: any) => [
        operation.user_name,
        operation.profile_id,
        operation.product_name,
        operation.price,
        operation.action,
        dateToString(operation.created_date),
      ]),
    ];
  };
  const responseData = resource.read().message; //@ts-ignore
  const [allData, setAllData] = useState(responseData);
  const [tableData, setTableData] = useState<any[]>(getTableData(responseData));

  const [selectedOption, setSelectedOption] = useState("Все");
  const options = ["Все", "Ферма", "3D"];
  const usersFilter = (optionText: string) => {
    let newData;
    if (optionText === "Ферма" || optionText === "3D") {
      newData = allData.filter(
        (operation: any) => operation.category === optionText
      );
    } else {
      newData = allData;
    }
    setTableData(getTableData(newData));
    setSelectedOption(optionText);
  };

  return (
    <>
      <Purchases />
      <MarketplaceTrends />
      <div
        className="table-title d-flex align-items-center my-4"
        style={{ gap: "1.5rem" }}
      >
        Операции пользователей{" "}
        <DropdownCategories
          options={options}
          selectedOption={selectedOption}
          onClick={usersFilter}
          className="rounded-btn py-2"
        />
      </div>
      <Table columns={columns} data={tableData} />
      <Revenue />
    </>
  );
}
