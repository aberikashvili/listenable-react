import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/dashboard/dashboard";
import Demographics from "./components/demographics/demographics";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useStore } from "./utils/conextapi/useStore";
import { GeneralTraffic } from "./components/generaltraffic/generaltraffic";
// import PopularSegment from "./components/popularsegment/popularsegment";
import PopularEpisodes from "./components/popularepisode/popularepisode";
import Populartopics from "./components/populartopic/populartopic";
import Sidebar from "./components/sidebar/sidebar";
import PopularSegment from "./components/popularsegmets/popularsegmets";

function App() {
  const { isThemeChange } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <Box sx={isThemeChange ? {display:"flex"} : { background: "rgba(30, 30, 30, 1)",display:"flex" }}>
      <Sidebar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/demographics" element={<Demographics />} />
        <Route path="/PopularSegment" element={<PopularSegment />} />
        <Route path="/PopularEpisodes" element={<PopularEpisodes />} />
        <Route path="/generaltraffic" element={<GeneralTraffic />} />
        <Route path="/Populartopics" element={<Populartopics/>} />
      </Routes>
    </Box>
  );
}

export default App;
