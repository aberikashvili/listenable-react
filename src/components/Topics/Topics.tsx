import { Box } from "@mui/material";
import PopularTopics from "../subComponents/PopularTopics";
import InTrendTopics from "../subComponents/InTrendTopics";
import OutTrenTopics from "../subComponents/OutTrendTopics";
const Topics = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <PopularTopics />
      <Box sx={{ display: "flex", marginTop: "16px", gap: "16px" }}>
        <InTrendTopics />
        <OutTrenTopics />
      </Box>
    </Box>
  );
};

export default Topics;
