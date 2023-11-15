import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const chartStyle = { width: "700px", height: "337px" };

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      max: 100,
      ticks: {
        stepSize: 20,
        callback: function (value: any) {
          return "%" + value;
        },
      },
      grid: {
        display: false,
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 10,
    },
  },
  barThickness: 50,
};

const labels = [
  "0 - 10",
  "10 - 20",
  "20 - 30",
  "30 - 40",
  "40 - 50",
  "50 - 60",
  "60+",
];

export const data = {
  labels,
  datasets: [
    {
      data: [20, 10, 30, 15, 20, 15, 30],
      backgroundColor: "#FFB264",
    },
    {
      data: [10, 20, 30, 40, 50, 16, 10],
      backgroundColor: "#009C99",
    },
    {
      data: [10, 40, 20, 30, 15, 40, 50],
      backgroundColor: "#FF6482",
    },
  ],
};

export default function AgeGenderChart() {
  return <Bar options={options} data={data} style={chartStyle} />;
}
