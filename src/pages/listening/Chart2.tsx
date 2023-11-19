// import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";

const pieParams = { height: 200, margin: { right: 5 } };
const defaultColor = "#F3F5F8";

const RetencionRate = () => {
  //   const [hoveredValue, setHoveredValue] = useState(null);
  const totalPercentage = 100;

  const data = [
    { value: 20, color: "#FF97C6" },
    { value: 15, color: "#FFD971" },
    { value: 10, color: "#DDB0F8" },
  ];

  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  const normalizedData = data.map((item) => ({
    ...item,
    percentage: (item.value / totalValue) * totalPercentage,
  }));

  // const handleBoxHover = (value: any) => {
  //   setHoveredValue(value);
  // };

  // const handleBoxOut = () => {
  //   setHoveredValue(null);
  // };

  return (
    <Stack width="100%" spacing={2}>
      <Box flexGrow={1}>
        <Typography
          sx={{
            color: "#000",
            fontFamily: "roboto",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Retention rate
        </Typography>
        <Box
          sx={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "60%",
            }}
          >
            {normalizedData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  width: "100%",
                }}
                // onMouseOver={() => handleBoxHover(totalValue)}
                // onMouseOut={handleBoxOut}
              >
                <PieChart
                  tooltip={{ trigger: "none" }}
                  series={[
                    {
                      data: [
                        { value: item.percentage, color: item.color },
                        {
                          value: totalPercentage - item.percentage,
                          color: defaultColor,
                        },
                      ],

                      innerRadius: 95 - index * 10,
                      outerRadius: 89 - index * 10,
                      startAngle: -180,
                      endAngle: 180,
                      cornerRadius: 100,
                    },
                  ]}
                  {...pieParams}
                />
              </Box>
            ))}
            <Box
              sx={{
                position: "absolute",
                top: "90px",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "26px",
                  textAlign: "center",
                  fontFamily: "roboto",
                  fontWeight: "400",
                  color: "#000",
                }}
              >
                57%
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              width: "90px",
              fontFamily: "roboto",
              color: "#000",
              fontWeight: "300",
              marginBottom: "-200px",
            }}
          >
            Slightly higher than average
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default RetencionRate;
