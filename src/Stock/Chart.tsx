import '../Css/stock.scss';

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Chart() {
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [4, 15, 15, 10, 20, 3, 2, 0],
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
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
    <div className="charts_container">
       <p className ="first__element">   Views </p>
       <h4 className='second__element'>512K </h4>
       <h4 className='third__element'> -3,8%</h4>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default Chart;







