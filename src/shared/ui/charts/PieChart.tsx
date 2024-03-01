import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { FC } from "react";

ChartJS.register(ArcElement, Tooltip);

type PieChartProps = {
  label: string;
  labels: string[];
  dataset: number[];
};

export const PieChart: FC<PieChartProps> = ({ label, labels, dataset }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        backgroundColor: ["#6c66c6", "#66a3c6"],
        borderColor: "#6c66c6",
        borderWidth: 1,
        data: dataset,
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "",
      fontSize: 16,
    },
    legend: {
      display: true,
      position: "right",
    },
  };
  return <Pie data={data} options={options} />;
};
