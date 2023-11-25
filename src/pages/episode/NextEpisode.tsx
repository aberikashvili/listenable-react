import { Box, Card, Typography } from "@mui/material";
import ControlledOpenSelect from "../../components/centralComponents/popular/Select";
import axios from "axios";
import { useState, useEffect } from "react";
import { useStore } from "../../utils/useStore";

type Item = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

function NextEpisode({ width }: any) {
  const { isThemeChange } = useStore();
  const [items, setItems] = useState<Item[]>([]);

  console.log(width);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((Response) => setItems(Response.data));
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
  }, []);

  return (
    <Card
      elevation={3}
      sx={
        isThemeChange
          ? {
              paddingTop: "10px",
              width: { width },
              height: "337px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "9px",
            }
          : {
              paddingTop: "10px",
              width: { width },
              height: "337px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "9px",
              background: "#1e1e1e",
              color: "#FFF",
            }
      }
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
          {" "}
          Next Episode
        </Typography>
        <ControlledOpenSelect />
      </Box>
      <Box
        sx={{
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          height: "40px",
          width: "95%",
        }}
      >
        {items.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                height: "40px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", width: "100%" }}>
                <img
                  src="https://www.billboard.com/wp-content/uploads/2020/12/jay-z-roc-nation-brunch-2020-billboard-1548-1607102538.jpg"
                  alt="jay-z"
                  width="40px"
                  height="40px"
                  style={{ borderRadius: "10px", marginRight: "10px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                    {item.title}{" "}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "#909090",
                      }}
                    >
                      1501 listening time
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "#909090",
                        marginTop: "-10px",
                      }}
                    >
                      Downloads:
                      <span
                        style={
                          isThemeChange
                            ? { color: "#121111" }
                            : {
                                color: "#fff",
                              }
                        }
                      >
                        {item.userId}k
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Card>
  );
}

export default NextEpisode;
