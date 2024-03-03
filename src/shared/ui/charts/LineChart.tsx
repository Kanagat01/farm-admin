import { useRef, useEffect, FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

type LineChartProps = {
  label: string;
  labels: string[];
  dataset: number[];
};

export const LineChart: FC<LineChartProps> = ({ label, labels, dataset }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: dataset,
        borderWidth: 3,
        fill: false,
      },
    ],
  };
  const options = {
    intersect: true,
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 2,
      },
    },
  };
  const chartRef = useRef(null);

  useEffect(() => {
    const chart: any = chartRef.current;

    if (chart) {
      let gradientStroke = chart.ctx.createLinearGradient(100, 60, 30, 0);
      gradientStroke.addColorStop(0, "#6c66c6"); // var(--primary)
      gradientStroke.addColorStop(1, "#66a3c6");

      const newDatasets = chart.data.datasets.map((set: any) => ({
        ...set,
        borderColor: gradientStroke,
      }));

      chart.data.datasets = newDatasets;
      chart.update();
    }
  }, [dataset]);
  return <Line data={data} ref={chartRef} options={options} />;
};
