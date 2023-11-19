import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/dashboard/dashboard";
import Demographics from "./components/demographics/demographics";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useStore } from "./utils/useStore";
import Episode from "./pages/episode/Episode";
import ListenTime from "./pages/listening/ListenTime";

function App() {
  const { isThemeChange } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <Box sx={isThemeChange ? {} : { background: "#1e1e1e" }}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/demographics" element={<Demographics />} />
        <Route path="/episode/demographics" element={<Episode />} />
        <Route path="/episode/listening_time" element={<ListenTime />} />
      </Routes>
    </Box>
  );
}

export default App;
