import { Box, Card, Typography } from "@mui/material";
import Sidebar from "../../components/sidebar/sidebar";
import Charts from "./Charts";
import EpisodeTable from "./Table";
import { useStore } from "../../utils/useStore";
import { Link } from "react-router-dom";
import NextEpisode from "./NextEpisode";

function Episode() {
  const { isThemeChange } = useStore();
  const table = [
    { city: "New York", downloads: 1200, listeningTime: "12111m" },
    {
      city: "New Jersy",
      downloads: 14000,
      listeningTime: "34252m",
    },
    { city: "New York", downloads: 1200, listeningTime: "12111m" },
    {
      city: "New Jersy",
      downloads: 14000,
      listeningTime: "34252m",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box>
        <Card
          sx={
            isThemeChange
              ? {
                  width: "1156px",
                  height: "505px",
                  margin: "16px",
                }
              : {
                  width: "1156px",
                  margin: "16px",
                  background: "#1E1E1E",
                  border: "1px solid #343434",
                  color: "#ffffff",
                }
          }
          elevation={1}
        >
          <Box
            sx={{
              width: "100%",
              height: "148px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={
                isThemeChange
                  ? {
                      color: "#121111",
                      fontFamily: "roboto",
                      fontSize: "16px",
                      fontWeight: "500",
                      marginBottom: "26px",
                    }
                  : {
                      color: "#fff",
                      fontFamily: "roboto",
                      fontSize: "16px",
                      fontWeight: "500",
                    }
              }
            >
              Episode
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex" }}>
                <img
                  src=""
                  alt=""
                  width={"40px"}
                  height={"40px"}
                  style={{ borderRadius: "10px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "15px",
                  }}
                >
                  <Typography
                    sx={
                      isThemeChange
                        ? {
                            fontFamily: "roboto",
                            fontSize: "14px",
                            fontWeight: "400",
                            color: "#121111",
                          }
                        : {
                            fontFamily: "roboto",
                            fontSize: "14px",
                            fontWeight: "400",
                            color: "#fff",
                          }
                    }
                  >
                    {" "}
                    Should She Let Her Man Move In With Another Woman
                  </Typography>
                  <Typography
                    sx={{
                      color: "#909090",
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  >
                    1501 listening time
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#909090",
                    fontFamily: "Roboto",
                    border: "1px solid #f0f0f0",
                    borderRadius: "3px",
                    padding: "6px 10px",
                  }}
                >
                  Ave listen Time{" "}
                  <span
                    style={
                      isThemeChange ? { color: "#121111" } : { color: "#fff" }
                    }
                  >
                    11:00
                  </span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#909090",
                    fontFamily: "Roboto",
                    border: "1px solid #f0f0f0",
                    padding: "6px 10px",
                  }}
                >
                  Ave listen Time{" "}
                  <span
                    style={
                      isThemeChange ? { color: "#121111" } : { color: "#fff" }
                    }
                  >
                    11:00
                  </span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#909090",
                    fontFamily: "Roboto",
                    border: "1px solid #f0f0f0",
                    padding: "6px 10px",
                  }}
                >
                  Ave listen Time{" "}
                  <span
                    style={
                      isThemeChange ? { color: "#121111" } : { color: "#fff" }
                    }
                  >
                    11:00
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "30px", padding: "15px" }}>
              <Typography
                sx={{
                  color: "#F155BD",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Demographics{" "}
                <span>
                  <Box
                    sx={{
                      marginTop: "20px",
                      width: "105px",
                      height: " 2px",
                      backgroundColor: "#F155BD",
                    }}
                  ></Box>
                </span>
              </Typography>
              <Link
                to={"/episode/listening_time"}
                style={{
                  textDecoration: "none",
                  color: "#909090",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Listening time
              </Link>
              <Link
                to={"/episode/segments"}
                style={{
                  textDecoration: "none",
                  color: "#909090",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Segments
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              width: "98%",
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid #EAEAEA",
              padding: "14px 0px 16px 0px",
            }}
          >
            <Charts />
            <Box
              sx={{
                width: "410px",
                height: "326px",
                border: "1px solid #EAEAEA",
                borderRadius: "6px",
              }}
            >
              {" "}
              <EpisodeTable table={table} />
            </Box>
          </Box>
        </Card>
        <Box sx={{ padding: "15px" }}>
          <NextEpisode width={"1157px"} />
        </Box>
      </Box>
    </Box>
  );
}

export default Episode;
