import { useState } from "react";

import { Analytics } from "~/widgets";
import { createResource } from "~/shared/api";
import { DoughnutChart, Table } from "~/shared/ui";
import { getStatsData, getTabData } from "~/shared/lib";

const resource = createResource("/api_admin/get_order_statistics/");

export default function OrderAnalytics() {
  let responseData = resource.read().message; //@ts-ignore
  const [allData, setAllData] = useState(responseData); //@ts-ignore
  const [orderStats, setOrderStats] = useState<any[]>(
    getStatsData(responseData, "order_analytics")
  );
  const [tabsOption, setTabsOption] = useState("Все");
  const [tabData, setTabData] = useState(
    getTabData(responseData, "order_analytics", tabsOption)
  );
  const statsCols = [
    "День",
    "Неделя",
    "Месяц",
    "Квартал",
    "Завершенные",
    "Не завершенные",
    "Оплачено",
    "Не оплачено",
  ];

  const tabs = [
    ...Object.entries(tabData).map(([key, dict]: any) => {
      return {
        key: key,
        title: dict.title,
        labels: dict.labels,
        dataset: dict.dataset,
      };
    }),
  ];
  const tabsOnChange = (option: string) => {
    setTabsOption(option);
    setTabData(getTabData(allData, "order_analytics", option));
  };

  const pie_charts = [
    {
      dataset: [orderStats[4], orderStats[5]],
      labels: ["Завершенные", "Не завершенные"],
    },
    {
      dataset: [orderStats[6], orderStats[7]],
      labels: ["Оплачено", "Не оплачено"],
    },
  ];

  return (
    <>
      <div className="table-title my-4">Количество заказов</div>
      <Table columns={statsCols} data={[orderStats]} />

      <Analytics
        title="Количество заказов в графиках"
        label="Количество заказов"
        tabs={tabs}
        selectedOption={tabsOption}
        onChange={tabsOnChange}
      />

      <div className="chart-block mt-5">
        <div className="row">
          {pie_charts.map((el, index) => (
            <div className="col-sm-6 col-12" key={index}>
              <DoughnutChart data={el.dataset} labels={el.labels} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
