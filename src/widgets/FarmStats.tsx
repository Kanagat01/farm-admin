import { createResource } from "~/shared/api";
import { Table } from "~/shared/ui";
import { Analytics } from ".";
import { getDays } from "~/shared/lib";
import { ExportData } from "~/features";

const farmStatsResource = createResource(
  "/api_admin/get_farm_produced_analytics/"
);
const exportDataResource = createResource(
  "/api_admin/get_farm_produced_export_data/"
);
export function FarmStats() {
  const periods = ["День", "Неделя", "Месяц", "Квартал"];
  const exportData = exportDataResource.read().message;
  const data: Record<string, number> = farmStatsResource.read().message;
  const [today, oneWeekAgo, oneMonthAgo] = getDays();

  let [weekLabels, monthLabels] = [
    ...[oneWeekAgo, oneMonthAgo].map((date) => {
      return Object.keys(data).filter((key: string | Date) => {
        key = new Date(key);
        key.setHours(0, 0, 0, 0);
        return key >= date && key <= today;
      });
    }),
  ];
  let [weekDataset, monthDataset] = [
    ...[weekLabels, monthLabels].map((lst) => {
      return lst.map((key) => data[key]);
    }),
  ];

  let quarterDataset = Object.values(data);
  const farmStats = {
    week: {
      title: "Неделя",
      labels: weekLabels,
      dataset: weekDataset,
    },
    month: {
      title: "Месяц",
      labels: monthLabels,
      dataset: monthDataset,
    },
    quarter: {
      title: "Квартал",
      labels: Object.keys(data),
      dataset: quarterDataset,
    },
  };
  const sum = (someData: number[]) => someData.reduce((a, b) => a + b, 0);

  const tabs = Object.entries(farmStats).map(([key, dict]: any) => {
    return {
      key: key,
      title: dict.title,
      labels: dict.labels,
      dataset: dict.dataset,
    };
  });
  return (
    <>
      <div
        className="table-title my-5 d-flex align-items-center"
        style={{ gap: "1rem" }}
      >
        Количество заказов Ферма
        <ExportData
          data={exportData.slice(1)}
          headers={exportData[0]}
          text="Экспортировать"
        />
      </div>
      <Table
        columns={periods}
        data={[
          [
            farmStats.week.dataset[0],
            sum(farmStats.week.dataset),
            sum(farmStats.month.dataset),
            sum(farmStats.quarter.dataset),
          ],
        ]}
      />
      <Analytics
        title="Количество заказов Ферма в графиках"
        label="Количество заказов Ферма"
        tabs={tabs}
      />
    </>
  );
}
