import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsReferenceLine } from "@mui/x-charts";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { Box } from "@mui/material";

const aData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const bData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const cData = [2400, 700, 8000, 4908, 4000, 1800, 6300];
const xLabels = [" 0", " Jan", " Feb", " Mar", " Apr", " May", " Jun"];
export default function Chart() {
  return (
    <Box sx={{ width: "100%" }}>
      <ChartContainer
        width={1155}
        height={300}
        series={[
          { data: aData, label: "pv", type: "line" },
          { data: bData, label: "uv", type: "line" },
          { data: cData, label: "uv", type: "line" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      >
        <LinePlot />
        <MarkPlot />
        <ChartsReferenceLine
          x="Page C"
          label="Max PV PAGE"
          lineStyle={{ stroke: "red" }}
        />
        <ChartsXAxis />
        <ChartsYAxis />
      </ChartContainer>
    </Box>
  );
}
