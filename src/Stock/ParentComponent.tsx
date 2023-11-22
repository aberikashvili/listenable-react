import Stock from '../Stock/Stock';
import Chart from '../Stock/Chart'
import StockChart from "./StockChart";
import "../Css/ParentComponent.scss"

function ParentComponent() {
  return (
    <div className='border__styles'>
      <Stock/>
      <Chart />
      <StockChart />
              
           
        </div>
         
      );
    }
     
export default ParentComponent;
