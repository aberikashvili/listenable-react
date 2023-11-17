import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";

const pieParams = { height: 200, margin: { right: 5 } };
const defaultColor = "#F3F5F8";

 const RetencionRate = () =>{
  const [hoveredValue, setHoveredValue] = useState(null);
  const totalPercentage = 100;

  const data = [
    { value: 10, color: "#FF97C6" },
    { value: 15, color: "#FFD971" },
    { value: 20, color: "#DDB0F8" },
    { value: 20, color: "#73FFCE" },
    { value: 20, color: "#FFBF00" },
    { value: 15, color: "#CDD4DF" },
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
    <Stack direction="row" width="90%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>Retention rate</Typography>
        
        <Box sx={{ position: "relative" }}>
          {normalizedData.map((item, index) => (
            <Box
              key={index}
              sx={{ position: "absolute", width: "100%" }}
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

                    innerRadius: 90 - index * 10,
                    outerRadius: 100 - index * 10,
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
              top:'80px',
              width:'100%',
            }}
          >
            <Typography sx={{fontSize:'26px'}}>57%</Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top:'80px',
              width:'100%',
            }}
          >
            <Typography sx={{fontSize:'14px', width:'100px'}}>Slightly higher than average</Typography>
          </Box>
          {/* {hoveredValue !== null && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "8px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
              }}
            >
              Hovered Value: {hoveredValue}
            </div>
          )} */}
        </Box>
        
      </Box>
    </Stack>
  );
}

export default RetencionRate
