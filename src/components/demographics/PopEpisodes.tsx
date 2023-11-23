import { useEffect } from "react";
import { useStore } from "../../utils/conextapi/useStore";
import { Box, Typography } from "@mui/material";

export type PopEpisodes = {
  image: string;
  title: string;
  downloads: string;
  listening_time: string;
};

const PopEpisodes = () => {
  const { popEpisodes, setPopEpisodes } = useStore();

  useEffect(() => {
    try {
      fetch("/public/segments/segments.json")
        .then((response) => response.json())
        .then((json) => setPopEpisodes(json));
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(popEpisodes);
  return (
    <Box sx={{ borderTop: "1px solid #F0F0F0" }}>
      <Typography
        sx={{
          fontSize: "16px",
          marginTop: "16px",
          marginBottom: "23px",
          fontWeight: "700",
        }}
      >
        Popular episodes
      </Typography>
      {popEpisodes.map((episode: any) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "527px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                textAlign: "start",
                gap: "12px",
              }}
            >
              <Box>
                <img
                  src={episode.image}
                  alt="episode"
                  style={{
                    objectFit: "cover",
                    borderRadius: "5px",
                    width: "30px",
                    height: "40px",
                  }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                  {episode.title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#909090" }}>
                  {episode.listening_time} listening time
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ fontSize: "14px" }}>
              <span style={{ color: "#909090" }}>Downloads: </span>
              {episode.downloads}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default PopEpisodes;
