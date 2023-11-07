import { useState } from "react";
import "./App.css";
import Segment from "./centralComponents/popular/Segment";
import NotPopular from "./centralComponents/notPopular/NotPopular";

function App() {
  return (
    <>
      <Segment />
      <NotPopular />
    </>
  );
}

export default App;
