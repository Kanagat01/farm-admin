import { useState, useEffect } from "react";

import { Analytics } from "~/widgets";
import { apiInstance } from "~/shared/api";
import { getStatsData, getTabData } from "~/shared/lib";
import { Table } from "~/shared/ui";

export function Revenue() {
  const [allData, setAllData] = useState({});
  const [tabData, setTabData] = useState({});
  const [tabsOption, setTabsOption] = useState("Все");

  const revenueColumns = ["день", "неделя", "месяц", "квартал"];
  const [revenueValues, setRevenueValues] = useState<any[]>([]);

  useEffect(() => {
    apiInstance.get("/api_admin/get_revenue_statistics/").then((response) => {
      const responseData = response.data;
      setAllData(responseData);
      setRevenueValues(getStatsData(responseData, "revenue_analytics"));
      setTabData(getTabData(responseData, "revenue_analytics", tabsOption));
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
    setTabData(getTabData(allData, "revenue_analytics", option));
  };
  return (
    <>
      <div className="table-title my-4">Показатели выручки</div>
      <Table columns={revenueColumns} data={[revenueValues]} />

      <Analytics
        title="Показатели выручки в графиках"
        label="Выручка"
        tabs={tabs}
        selectedOption={tabsOption}
        onChange={tabsOnChange}
      />
    </>
  );
}
