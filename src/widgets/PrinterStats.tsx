import { createResource } from "~/shared/api";
import { Table } from "~/shared/ui";
import { Analytics } from ".";
import { getDays } from "~/shared/lib";
import { ExportData } from "~/features";

const printerStatsResource = createResource(
  "/api_admin/get_printer_produced_analytics/"
);

const exportDataResource = createResource(
  "/api_admin/get_printer_produced_export_data/"
);

export function PrinterStats() {
  const periods = ["День", "Неделя", "Месяц", "Квартал"];
  const exportData = exportDataResource.read().message;
  const data: Record<string, number> = printerStatsResource.read().message;
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
  const printerStats = {
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

  const tabs = Object.entries(printerStats).map(([key, dict]: any) => {
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
        Количество заказов 3D
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
            printerStats.week.dataset[0],
            sum(printerStats.week.dataset),
            sum(printerStats.month.dataset),
            sum(printerStats.quarter.dataset),
          ],
        ]}
      />
      <Analytics
        title="Количество заказов 3D в графиках"
        label="Количество заказов 3D"
        tabs={tabs}
      />
    </>
  );
}
