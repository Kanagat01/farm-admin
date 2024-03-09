import { useState } from "react";
import { createResource } from "~/shared/api";
import { DropdownCategories, Table } from "~/shared/ui";

const resource = createResource("/api_admin/get_marketplace_buy_sell/");

export function Purchases() {
  const allData = resource.read().message;
  const dataModel = {
    printer_buy: "Buy 3D",
    printer_sell: "Sell 3D",
    farm_buy: "Buy Ферма",
    farm_sell: "Sell Ферма",
  };
  const options = ["Неделя", "Месяц", "45 дней", "Квартал"];
  const getTableData = (option: string) => {
    return Object.keys(dataModel).map((key) => allData[option][key]);
  };

  const [selectedOption, setSelectedOption] = useState("Неделя");

  const [data, setData] = useState(getTableData("7"));
  const onClick = (option: string) => {
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
    setData(getTableData(optionKey));
    setSelectedOption(option);
  };
  return (
    <>
      <div
        className="table-title d-flex align-items-center my-4"
        style={{ gap: "1.5rem" }}
      >
        Общее количество продаж и покупок{" "}
        <DropdownCategories
          options={options}
          selectedOption={selectedOption}
          onClick={onClick}
          className="rounded-btn py-2"
        />
      </div>
      <Table columns={Object.values(dataModel)} data={[data]} />
    </>
  );
}
