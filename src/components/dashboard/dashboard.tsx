import { Box } from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import NotPopular from "../centralComponents/notPopular/NotPopular";
import Segment from "../centralComponents/popular/Segment";

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ marginLeft: "16px" }}>
        <Segment />
        <NotPopular />
      </Box>
    </Box>
  );
}

export default Dashboard;
