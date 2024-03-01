import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  DoughnutController,
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

type DoughnutChartProps = {
  labels: string[];
  data: number[];
};

export const DoughnutChart: React.FC<DoughnutChartProps> = ({
  labels,
  data,
}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ["#6c66c6", "#66a3c6"],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};
