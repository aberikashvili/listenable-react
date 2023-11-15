import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/dashboard/dashboard";
import Demographics from "./components/Demographics";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useStore } from "./utils/conextapi/useStore";

function App() {
  const { isThemeChange } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <Box sx={isThemeChange ? {} : { background: "rgba(30, 30, 30, 1)" }}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/demographics" element={<Demographics />} />
      </Routes>
    </Box>
  );
}

export default App;
