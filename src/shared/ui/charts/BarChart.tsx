import { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip } from "chart.js";

ChartJS.register(BarElement, Tooltip);

type BarChartProps = {
  label: string;
  labels: string[];
  dataset: number[];
};

export const BarChart: React.FC<BarChartProps> = ({
  label,
  labels,
  dataset,
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: dataset,
        borderWidth: 0,
      },
    ],
  };
  const options = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        ticks: {
          color: "#212529",
          padding: 10,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.03)",
          drawBorder: false,
        },
      },
      x: {
        display: true,
        barPercentage: 0.3,
        font: {
          size: 20,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };
  const chartRef = useRef(null);
  useEffect(() => {
    const chart: ChartJS | null = chartRef.current;

    if (chart) {
      let gradientStroke = chart.ctx.createLinearGradient(100, 60, 30, 0);
      gradientStroke.addColorStop(0, "#6c66c6"); // var(--primary)
      gradientStroke.addColorStop(1, "#66a3c6");

      const newDatasets = chart.data.datasets.map((set) => ({
        ...set,
        backgroundColor: gradientStroke,
        borderColor: gradientStroke,
      }));

      chart.data.datasets = newDatasets;
      chart.update();
    }
  }, [dataset]);
  return (
    <Bar data={data} width={100} height={50} options={options} ref={chartRef} />
  );
};
