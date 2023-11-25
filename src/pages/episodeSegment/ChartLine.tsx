import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsReferenceLine } from "@mui/x-charts";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

const aData = [3000, 2000, 2780, 1890, 2390, 3490];

const xLabels = [
  " Intro",
  " Bert talks about ",
  " Segment 3",
  " Segment 4",
  " Segment 5",
  " Outro",
];
export default function Chart() {
  return (
    <ChartContainer
      width={1155}
      height={300}
      series={[{ data: aData, label: "pv", type: "line" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
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
  );
}
