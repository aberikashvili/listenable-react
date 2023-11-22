import PopularTopics from "./topics/PopularTopics";
// import StockChart from "./Stock/StockChart";
import PopularSongs from "./Songs/PopularSongs";
// import Chart from "./Stock/Chart";
// import Stock from "./Stock/Stock";
import ParentComponent from "./Stock/ParentComponent";

function App() {
  return (
    <div className="import">
      <ParentComponent />
      {/* <Stock/>
      <Chart />
      <StockChart /> */}
              <PopularTopics /> 
              <PopularSongs/>
           
        </div>
         
      );
    }
     
export default App;




