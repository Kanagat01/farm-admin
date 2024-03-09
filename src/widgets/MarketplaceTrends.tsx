import { useState } from "react";
import { createResource } from "~/shared/api";
import { DropdownCategories, Table } from "~/shared/ui";

const resource = createResource("/api_admin/get_marketplace_trends/");
export function MarketplaceTrends() {
  const allData = resource.read().message;

  const dataModel = {
    name: "Название",
    orders_count: "Количество продаж",
  };

  const options = ["Неделя", "Месяц", "45 дней", "Квартал"];
  const [printerOption, setPrinterOption] = useState("Неделя");
  const [farmOption, setFarmOption] = useState("Неделя");

  const getTableData = (option: string, category: string) => {
    let optionKey;
    if (option === "Неделя") {
      optionKey = "7";
    } else if (option === "Месяц") {
      optionKey = "30";
    } else if (option === "45 дней") {
      optionKey = "45";
    } else {
      optionKey = "90";
    }
    let allProducts =
      category === "farm"
        ? allData[optionKey].farm_products
        : allData[optionKey].printer_products;
    let result = allProducts.map((el: any) =>
      Object.keys(dataModel).map((key) => el[key])
    );

    return result;
  };

  const [farmData, setFarmData] = useState(getTableData("Неделя", "farm"));
  const [printerData, setPrinterData] = useState(getTableData("Неделя", "3d"));

  const farmOnClick = (option: string) => {
    setFarmData(getTableData(option, "farm"));
    setFarmOption(option);
  };

  const printerOnClick = (option: string) => {
    setPrinterData(getTableData(option, "3d"));
    setPrinterOption(option);
  };
  return (
    <>
      <div
        className="table-title d-flex align-items-center my-4"
        style={{ gap: "1.5rem" }}
      >
        Востребованные продукты Ферма{" "}
        <DropdownCategories
          options={options}
          selectedOption={farmOption}
          onClick={farmOnClick}
          className="rounded-btn py-2"
        />
      </div>
      <Table columns={Object.values(dataModel)} data={farmData} />

      <div
        className="table-title d-flex align-items-center my-4"
        style={{ gap: "1.5rem" }}
      >
        Востребованные продукты 3D{" "}
        <DropdownCategories
          options={options}
          selectedOption={printerOption}
          onClick={printerOnClick}
          className="rounded-btn py-2"
        />
      </div>
      <Table columns={Object.values(dataModel)} data={printerData} />
    </>
  );
}
