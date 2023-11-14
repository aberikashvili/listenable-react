import { Box, Card, Typography } from "@mui/material";
import ControlledOpenSelect from "./Select";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../../../utils/useStore";

type Item = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

function Segment() {
  const { isThemeChange } = useStore();
  const [items, setItems] = useState<Item[]>([]);

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        elevation={3}
        sx={
          isThemeChange
            ? {
                paddingTop: "10px",
                width: "821px",
                height: "337px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "9px",
              }
            : {
                paddingTop: "10px",
                width: "821px",
                height: "337px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "9px",
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
            width: "790px",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            {" "}
            Poplar Segment
            <span
              style={{
                marginLeft: "10px",
                fontSize: "12px",
                fontWeight: "300",
                lineHeight: "14.06px",
                color: "#909090",
              }}
            >
              See all
            </span>
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
          }}
        >
          {items.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{
                  height: "40px",
                  width: "790px",
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
                  {item.id == 1 ? (
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
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
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
                          }}
                        >
                          View Count:
                          <span
                            style={
                              isThemeChange
                                ? { color: "#121111" }
                                : {
                                    color: "#fff",
                                  }
                            }
                          >
                            14k
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "400" }}
                        >
                          {item.title}{" "}
                        </Typography>

                        <Typography
                          sx={
                            isThemeChange
                              ? {
                                  fontSize: "10px",
                                  fontWeight: "400",
                                  color: "#121111",
                                }
                              : {
                                  fontSize: "10px",
                                  fontWeight: "400",
                                  color: "#fff",
                                }
                          }
                        >
                          Retention rate:3.8%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
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
                            14k
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Card>
    </Box>
  );
}

export default Segment;
