/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, getElementsAtEvent } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Sidebar from "../sidebar/sidebar";

import { data, downloadBackEndData, listeningBackEndData } from "./trafficInfo";
import { options } from "./trafficInfo";
import { Typography } from "@mui/material";
import CalendarSide from "./calendar/calendar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function GeneralTraffic() {
  const chartRef = useRef<any>(null);

  const onClick = (event: any) => {
    const elements = getElementsAtEvent(chartRef.current, event);
    if (elements && elements.length > 0) {
      const index = elements[0].index;
      const datasetIndex = elements[0].datasetIndex;

      const dataset =
        datasetIndex === 0 ? listeningBackEndData : downloadBackEndData;
      const hoveredItem = dataset[index];
      console.log(hoveredItem, "this is");
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box>
        <Box
          sx={{
            display: "flex",
            height: "326px",
            width: "1156px",
            margin: "16px",
            border: "1px solid rgba(240, 240, 240, 1)",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <Line
            width={"1051px"}
            height={"326px"}
            options={options}
            data={data}
            ref={chartRef}
            onClick={onClick}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "16px",
            justifyContent: "space-between",
          }}
        >
          {/* tite */}
          <Box
            sx={{ border: "1px solid rgba(240, 240, 240, 1)", width: "570px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "16px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(18, 17, 17, 1)",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Most disruptive episodes
              </Typography>
              <span>11amto06pm</span>
            </Box>
            {/* There is Map */}
            {listeningBackEndData.map((eachData) => {
              return (
                <Box
                key={eachData.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "16px",
                  }}
                >
                  <img src={eachData.img} alt="" />
                  <span
                    style={{
                      color: "rgba(18, 17, 17, 1)",
                      fontSize: "14px",
                      marginRight: "40px",
                    }}
                  >
                    {eachData.title}
                  </span>
                  <img src="/src/images/ForExample/Vector 16.png" alt="" />
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{ border: "1px solid rgba(240, 240, 240, 1)", width: "570px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "16px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(18, 17, 17, 1)",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Less disruptive episodes
              </Typography>
              <span>11amto06pm</span>
            </Box>
            {/* There is Map */}
            {listeningBackEndData.map((eachData) => {
              return (
                <Box
                key={eachData.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "16px",
                  }}
                >
                  <img src={eachData.img} alt="" />
                  <span
                    style={{
                      color: "rgba(18, 17, 17, 1)",
                      fontSize: "14px",
                      marginRight: "40px",
                    }}
                  >
                    {eachData.title}
                  </span>
                  <img src="/src/images/ForExample/Vector 18.png" alt="" />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <CalendarSide/>
    </Box>
  );
}
