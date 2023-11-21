import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/dashboard/dashboard";
import Demographics from "./components/demographics/demographics";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useStore } from "./utils/conextapi/useStore";
import PopularSegment from "./PopularSegments/PopularSegment";
import DateCalendar from "./Date/DateCalendar";
// import DateCalendar from "./Date/DateCalendar";
 

function App() {
  const { isThemeChange } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={isThemeChange ? {} : { background: "rgba(30, 30, 30, 1)" }}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/demographics" element={<Demographics />} />
      </Routes>
      <PopularSegment />
      <DateCalendar/>
    </Box>
  );
}

export default App;
