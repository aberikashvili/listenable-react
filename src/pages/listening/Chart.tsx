import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsReferenceLine } from "@mui/x-charts";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { Box, Typography } from "@mui/material";

const aData = [3000, 2000, 2780, 1890, 2390, 3490];
const bData = [2400, 1398, 9800, 4800, 3800, 4300];
const cData = [2400, 700, 8000, 4908, 1800, 6300];
const xLabels = ["Jan", " Feb", " Mar", " Apr", " May", " Jun"];
function Chart() {
  return (
    <ChartContainer
      width={1155}
      height={300}
      series={[
        { data: aData, label: "pv", type: "line" },
        { data: bData, label: "uv", type: "line" },
        { data: cData, label: "uv", type: "line" },
      ]}
      colors={["#1899CD", "#FFB264", "#009C99"]}
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
function LinierChart({ theme }: any) {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        marginTop: "-50px",
      }}
    >
      <Chart />
      <Box
        sx={{
          paddingLeft: "26px",
          display: "flex",
          gap: "35px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              width: "16px",
              height: "16px",
              border: "4px solid #009C99",
              background: "#fff",
            }}
          ></Box>
          <Typography
            sx={
              theme
                ? {
                    color: "#000",
                    fontfamily: "Roboto",
                    fontsize: "14px",
                    fontstyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }
                : {
                    color: "#fff",
                    fontfamily: "Roboto",
                    fontsize: "14px",
                    fontstyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }
            }
          >
            verage retention time / %
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              width: "16px",
              height: "16px",
              border: "4px solid #FFB264",

              background: "#fff",
            }}
          ></Box>
          <Typography
            sx={
              theme
                ? {
                    color: "#000",
                    fontfamily: "Roboto",
                    fontsize: "14px",
                    fontstyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }
                : {
                    color: "#FFF",
                    fontfamily: "Roboto",
                    fontsize: "14px",
                    fontstyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }
            }
          >
            {">"}
            5min retention %
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              width: "16px",
              height: "16px",
              border: "4px solid #1899CD",

              background: "#fff",
            }}
          ></Box>
          <Typography
            sx={
              theme
                ? {
                    color: "#000",
                    fontfamily: "Roboto",
                    fontsize: "14px",
                    fontstyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }
                : {
                    color: "#fff",
                    fontfamily: "Roboto",
                    fontsize: "14px",
                    fontstyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }
            }
          >
            {">"}
            5min retention %
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default LinierChart;
