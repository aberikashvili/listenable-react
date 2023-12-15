import { Box, Button, Card, Typography } from "@mui/material";
import Sidebar from "../../components/sidebar/sidebar";
import { useStore } from "../../utils/useStore";
import Chart2 from "./Chart2";
import { Link } from "react-router-dom";
import NextEpisode from "../episode/NextEpisode";
import { useState } from "react";
import ChartPage from "./Chartpage";
import DatePicker from "./calendar";
import LinerChart from "./components/linerChart";
function ListenTime() {
  const { isThemeChange } = useStore();
  const [isChartLiner, setIsChartLiner] = useState<boolean>(false);

  const handleChangeChart = () => {
    setIsChartLiner(!isChartLiner);
  };
  return (
    <Box sx={{ display: "flex", zIndex: "20" }}>
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
                <Typography
                  style={{
                    textDecoration: "none",
                    color: "#F155BD",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Listening time
                  <span>
                    <Box
                      sx={{
                        marginTop: "20px",
                        width: "100px",
                        height: " 2px",
                        backgroundColor: "#F155BD",
                      }}
                    ></Box>
                  </span>
                </Typography>
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
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {" "}
                <Button
                  onClick={() => handleChangeChart()}
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
                  {isChartLiner ? "Chart" : "Linier Chart"}
                </Button>
                <DatePicker />
              </Box>
            </Box>
          </Box>
          <Box>
            {isChartLiner ? (
              <LinerChart theme={isThemeChange} />
            ) : (
              <ChartPage />
            )}
          </Box>
        </Card>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <NextEpisode width={"787px"} />

          <Card
            sx={
              isThemeChange
                ? {
                    width: "354px",
                    marginTop: "9px",
                    padding: "16px",
                  }
                : {
                    width: "354px",
                    marginTop: "9px",
                    padding: "16px",
                    backgroundColor: "#1E1E1E",
                  }
            }
          >
            <Chart2 theme={isThemeChange} />
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default ListenTime;
