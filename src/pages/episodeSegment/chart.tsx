// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    id: "Listeners",
    data: [
      {
        x: "Intro",
        y: 88,
      },
      {
        x: "Bert talks about ",
        y: 222,
      },
      {
        x: "Segment 3",
        y: 159,
      },
      {
        x: "Segment 4",
        y: 67,
      },
      {
        x: "Segment 5",
        y: 36,
      },
      {
        x: "Outro",
        y: 153,
      },
    ],
  },
];
const LinierChart = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 45, right: 50, bottom: 20, left: 50 }}
      xScale={{ type: "band" }}
      gridYValues={6}
      yScale={{
        type: "linear",
        min: 0,
        max: 600,
        stacked: true,
        reverse: false,
      }}
      curve="cardinal"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 0,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 15,
        tickRotation: 0,
        legendOffset: 0,
      }}
      pointSize={7}
      pointColor={{ from: "color", modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={2}
      enableArea={true}
      areaBlendMode="normal"
      areaBaselineValue={0}
      areaOpacity={0.2}
      useMesh={true}
      animate={false}
    />
  );
};
export default LinierChart;
