import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const defaultColor = "#F3F5F8";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 24,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const RetencionRate = () => {
  const totalPercentage = 100;

  const pieChartsParams = {
    height: 400,
    margin: { top: 50, bottom: 50 },
    series: [
      {
        data: [{ value: 65, color: "#FF97C6" }],
        label: "bar 1",
      },
      {
        data: [{ value: 55, color: "#FFD971" }],
        label: "bar 2",
      },
      {
        data: [{ value: 45, color: "#DDB0F8" }],
        label: "bar 3",
      },
      {
        data: [{ value: 35, color: "#73FFCE" }],
        label: "bar 4",
      },
      {
        data: [{ value: 45, color: "#FFBF00" }],
        label: "bar 5",
      },
      {
        data: [{ value: 35, color: "#CDD4DF" }],
        label: "bar 6",
      },
    ],
  };

  const totalValue = pieChartsParams.series.reduce((acc, bar) => {
    const seriesTotal = bar.data.reduce(
      (seriesAcc, item) => seriesAcc + item.value,
      0
    );
    return acc + seriesTotal;
  }, 0);

  const normalizedData = pieChartsParams.series.map((bar) => ({
    percentage: (bar.data[0]?.value / totalValue) * totalPercentage,
    color: bar.data[0]?.color,
  }));

  return (
    <Stack
      direction={{ xs: "column", xl: "row" }}
      spacing={2}
      sx={{ width: "100%"}}
    >
      <Box
      sx={{
        flexGrow: 1,
        
        
      }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:'space-between',
            width:'400px',
            
          }}
        >
          <PieChart
            {...pieChartsParams}
            series={pieChartsParams.series.map((_serie, index) => ({
              data: [
                {
                  value: normalizedData[index]?.percentage,
                  color: normalizedData[index]?.color,
                },
                {
                  value: totalPercentage - normalizedData[index]?.percentage,
                  color: defaultColor,
                },
              ],
              innerRadius: 90 - index * 10,
              outerRadius: 100 - index * 10,
              endAngle: 180,
              cornerRadius: 100,
              startAngle: -180,
            }))}
          >
            <PieCenterLabel>57%</PieCenterLabel>
          </PieChart>
          <Typography
            sx={{ fontSize: "14px", color: "#121111", width: "150px" }}
          >
            Slightly higher than average
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default RetencionRate;
