import '../Css/chart.scss';

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
      <p className="chart_element" >Lis Time </p>
      <h4 className='second-chart-element'> 512K </h4>
      <p className='chart_statistics'>All Stats <ArrowForwardIosIcon style={{position: "absolute", marginTop: "-3px", width: "15px", cursor: "pointer"}}/> </p>
      <h4 className='third_chart_element'> +3,8%</h4>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default StockChart;

