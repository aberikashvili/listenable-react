import '../Css/stockChart.scss'

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Stock() {
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
    <div className="stock-container">
        {/* <div className='labels'>
            <h5 className ="label-one" > Daily < ArrowDropDownIcon style={{cursor: 'pointer'}}/></h5>
            
        </div> */}
         <h5 className ="label-one" > Daily < ArrowDropDownIcon style={{cursor: 'pointer'}}/></h5>
         <h4 className ="label-two" >General Traffic</h4>
         <p className ="label-three">   Downloads  </p>
          <h4 className ="label-four"> 512K </h4>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default Stock;

