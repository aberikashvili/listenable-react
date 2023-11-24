import { useEffect, useState } from "react";
import axios from "axios";
import { data, options } from "../../../public/ChartData";
import { Line } from "react-chartjs-2";
import { Box, Typography, CardMedia } from "@mui/material";
import "./InTrendTopics.scss";

type PopularTopic = {
  id: string;
  name: string;
  image: string;
  retentionRate: string;
  viewCount: string;
};

const InTrendTopics = () => {
  const [InTrendTopics, setInTrendTopics] = useState<PopularTopic[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/TopicsData.json");
      setInTrendTopics(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: "570px",
        height: "292px",
        borderRadius: "10px",
        border: " 1px solid #f0f0f0",
      }}
    >
      <Typography sx={{ mt: 2, ml: 2, mb: 3 }}>In trend Topics</Typography>
      {InTrendTopics.slice(4, 8).map((topic) => (
        <Box sx={{ display: "flex", mb: 2 }} key={topic.id}>
          <Box
            sx={{ display: "flex", alignItems: "center", width: "40%" }}
            className="left"
          >
            <CardMedia
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                marginLeft: "16px",
              }}
              component="img"
              src={topic.image}
              alt={topic.name}
            />
            <Typography
              sx={{
                width: "100px",
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
            sx={{
              display: "flex",
              alignItems: "center",
              width: "60%",
              gap: "16px",
            }}
            className="right"
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              Retention rate: {topic.retentionRate}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              View Count: {topic.viewCount}
            </Typography>
            <Box sx={{ width: "80px", height: "40px", marginLeft: "20px" }}>
              <Line data={data} options={options}></Line>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default InTrendTopics;
