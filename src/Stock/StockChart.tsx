import '../Css/chart.scss';

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function StockChart() {
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [1, 10, 4.5, 2, 7, 8, 2, 8],
        backgroundColor: "transparent",
        borderColor: "green",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4, 
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };
  return (
    <div className="chart-container">
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default StockChart;

