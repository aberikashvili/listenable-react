import { useEffect, useState } from "react";
import "./PopularTopics.scss";
import { Line } from "react-chartjs-2";
import { data, options } from "../../../../public/ChartData";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Box, CardMedia, Typography } from "@mui/material";
// import CustomDatePicker from "../CutomeDatePicker/CutomeDatePicker";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

type PopularTopic = {
  id: string;
  name: string;
  image: string;
  retentionRate: string;
  viewCount: string;
};

const PopularTopics = () => {
  const [topics, setTopics] = useState<PopularTopic[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("/TopicsData.json");
      setTopics(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box className="PopularTopics-wrapper">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 30px",
        }}
      >
        <Typography>Popular Topics</Typography>
        {/* <CustomDatePicker /> */}
      </Box>
      {topics.map((topic) => (
        <Box
          sx={{
            display: "flex",
            width: "1124px",
            height: "40px",
            top: "133px",
            left: "281px",
            borderRadius: "6px",
            margin: "auto",
            marginTop: "5px",
            marginBottom: "16px",
            gap: "50px",
          }}
          key={topic.id}
        >
          <Box
            className="left"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "50%",
            }}
          >
            <CardMedia
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
              }}
              component="img"
              src={topic.image}
              alt={topic.name}
            />
            <Typography
              sx={{
                width: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                marginLeft: "8px",
              }}
            >
              {topic.name}
            </Typography>
          </Box>
          <Box
            className="right"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              marginLeft: "30%",
              gap: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "127px",
                height: "27px",
                top: "140px",
                borderRadius: "6px",
                border: "1px solid #F0F0F0",
                gap: "6px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontWeight: "400",
                  textAlign: "left",
                  letterSpacing: "0",
                  padding: "6px 10px",
                }}
              >
                Retention rate: {topic.retentionRate}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "127px",
                height: "27px",
                top: "140px",
                borderRadius: "6px",
                border: "1px solid #F0F0F0",
                gap: "6px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontWeight: "400",
                  textAlign: "left",
                  letterSpacing: "0",
                  padding: "6px 10px",
                }}
              >
                View Count: {topic.viewCount}
              </Typography>
            </Box>
            <Box sx={{ width: "80px", height: "40px", marginLeft: "5px" }}>
              <Line data={data} options={options}></Line>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PopularTopics;
