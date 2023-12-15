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
    id: "verage retention time / %",
    data: [
      {
        x: "Jan",
        y: 88,
      },
      {
        x: "Feb",
        y: 222,
      },
      {
        x: "Mar",
        y: 159,
      },
      {
        x: "Apr",
        y: 67,
      },
      {
        x: "May",
        y: 36,
      },
      {
        x: "Jun",
        y: 153,
      },
    ],
  },
  {
    id: "5min retention %",
    data: [
      {
        x: "Jan",
        y: 299,
      },
      {
        x: "Feb",
        y: 117,
      },
      {
        x: "Mar",
        y: 30,
      },
      {
        x: "Apr",
        y: 208,
      },
      {
        x: "May",
        y: 263,
      },
      {
        x: "Jun",
        y: 172,
      },
    ],
  },
  {
    id: ">5min retention %",
    data: [
      {
        x: "Jan",
        y: 180,
      },
      {
        x: "Feb",
        y: 131,
      },
      {
        x: "Mar",
        y: 175,
      },
      {
        x: "Apr",
        y: 54,
      },
      {
        x: "May",
        y: 85,
      },
      {
        x: "Jun",
        y: 22,
      },
    ],
  },
];
const LinierChart = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 50 }}
      xScale={{ type: "band" }}
      gridYValues={6}
      yScale={{
        type: "linear",
        min: 0,
        max: 600,
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 15,
        tickRotation: 0,
        legendOffset: 0,
        legendPosition: "middle",
      }}
      pointSize={7}
      pointColor={{ from: "color", modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={2}
      enableArea={true}
      areaBlendMode="multiply"
      areaBaselineValue={0}
      areaOpacity={0.3}
      colors={["#009C99", "#FFB264", "#1899CD"]}
      useMesh={true}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: true,
          translateX: -141,
          translateY: 70,
          itemWidth: 68,
          itemHeight: 21,
          itemsSpacing: 8,
          symbolSize: 14,
          symbolShape: "circle",
          itemDirection: "left-to-right",
          itemTextColor: "#777",
          effects: [
            {
              on: "hover",
              style: {
                // itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={false}
    />
  );
};
export default LinierChart;
