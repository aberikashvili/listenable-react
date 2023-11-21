import PopularTopics from "./topics/PopularTopics";
import StockChart from "./Stock/StockChart";
import PopularSongs from "./Songs/PopularSongs";
import Chart from "./Stock/Chart";
import Stock from "./Stock/Stock";

function App() {
  return (
    <div className="import">
      <Stock/>
      <Chart />
      <StockChart />
              <PopularTopics /> 
              <PopularSongs/>
           
        </div>
         
      );
    }
     
export default App;




