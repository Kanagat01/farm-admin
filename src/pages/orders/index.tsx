import { useState, useEffect } from "react";

import { Analytics } from "~/widgets";
import { apiInstance } from "~/shared/api";
import { DoughnutChart, Table } from "~/shared/ui";
import { getStatsData, getTabData } from "~/shared/lib";

export default function OrderAnalytics() {
  const [allData, setAllData] = useState({});
  const [orderStats, setOrderStats] = useState<any[]>([]);
  const [tabData, setTabData] = useState({});
  const [tabsOption, setTabsOption] = useState("Все");
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

  useEffect(() => {
    apiInstance.get("/api_admin/get_order_statistics/").then((response) => {
      const responseData = response.data.message;
      setAllData(responseData);
      setOrderStats(getStatsData(responseData, "order_analytics"));
      setTabData(getTabData(responseData, "order_analytics", tabsOption));
    });
  }, []);

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
