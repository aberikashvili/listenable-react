import { Box } from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import Demographics from "../Demographics/Demographics";

function Dashboard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Sidebar />
      <Demographics />
    </Box>
  );
}

export default Dashboard;
