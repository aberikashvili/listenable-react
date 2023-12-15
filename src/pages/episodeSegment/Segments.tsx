import { Box, Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import { useStore } from "../../utils/useStore";
import NextEpisode from "../episode/NextEpisode";
import CalendarSide from "../listening/calendar";
import SegmentLinerChart from "./SegmentLineChart";

function Segments({ theme }: any) {
  const { isThemeChange } = useStore();
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
                  padding: "16px",
                }
              : {
                  width: "1156px",
                  height: "505px",
                  margin: "16px",
                  padding: "16px",
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
                      color: "#000",
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
              <Box>
                {" "}
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
                    14k
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #EAEAEA",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "30px",
                  paddingTop: "15px",
                }}
              >
                <Link
                  to={"/episode/demographics"}
                  style={{
                    textDecoration: "none",
                    color: "#909090",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Demographics
                </Link>
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
                <Typography
                  style={{
                    color: "#F155BD",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Segments
                  <span>
                    <Box
                      sx={{
                        marginTop: "20px",
                        width: "75px",
                        height: " 2px",
                        backgroundColor: "#F155BD",
                      }}
                    ></Box>
                  </span>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {" "}
                <Button
                  sx={{
                    height: "24px",
                    color: "#909090",
                    fontfamily: "Roboto",
                    fontsize: "12px",
                    fontstyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                    border: "1px solid #F0F0F0",
                    borderRadius: "3px",
                    marginBottom: "-6px",
                  }}
                >
                  Chart
                </Button>
                <CalendarSide />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: "20px",
              marginTop: "-50px",
            }}
          >
            <SegmentLinerChart />
            <Box
              sx={{
                paddingTop: "10px",
                paddingLeft: "45px",
                display: "flex",
                gap: "35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Box
                  sx={{
                    width: "16px",
                    height: "16px",
                    border: "4px solid #1899CD",
                    background: "#fff",
                  }}
                ></Box>
                <Typography
                  sx={
                    theme
                      ? {
                          color: "#121111",
                          fontfamily: "Roboto",
                          fontsize: "14px",
                          fontstyle: "normal",
                          fontweight: "400",
                          lineheight: "normal",
                        }
                      : {
                          color: "#909090",
                          fontfamily: "Roboto",
                          fontsize: "14px",
                          fontstyle: "normal",
                          fontweight: "400",
                          lineheight: "normal",
                        }
                  }
                >
                  Listeners
                </Typography>
              </Box>
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

export default Segments;
