import { Box, Card, Typography } from "@mui/material";
import NotPopular from "../../components/centralComponents/notPopular/NotPopular";
import Sidebar from "../../components/sidebar/sidebar";
import { useStore } from "../../utils/useStore";
import Chart from "./Chart";
import Chart2 from "./Chart2";
import { Link } from "react-router-dom";

function ListenTime() {
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
                      color: "#121111",
                      fontFamily: "roboto",
                      fontSize: "16px",
                      fontWeight: "500",
                      marginBottom: "16px",
                    }
                  : {
                      marginBottom: "16px",
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
              <Typography
                sx={{
                  color: "#909090",
                  fontFamily: "roboto",
                  fontSize: "12px",
                  fontWeight: "400",
                  textAlign: "right",
                }}
              >
                Downloads{" "}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#000",
                    textAlign: "right",
                  }}
                >
                  14K
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", gap: "30px", padding: "25px" }}>
                <Link
                  to={"/episode/demographics"}
                  style={{
                    textDecoration: "none",
                    color: "#909090",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Demographics
                </Link>
                <Typography
                  sx={{ color: "#F155BD", fontSize: "16px", fontWeight: "500" }}
                >
                  Listen tim
                </Typography>
                <Typography
                  sx={{
                    textDecoration: "none",
                    color: "#909090",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Segments
                </Typography>
                <Box>
                  <Box sx={{ border: "1px solid #090909" }}>Cart</Box>
                  {/* <DateRangePicker
                    slots={{ field: SingleInputDateRangeField }}
                    slotProps={{
                      textField: { InputProps: { endAdornment: <Calendar /> } },
                    }}
                  /> */}
                </Box>
              </Box>
            </Box>
          </Box>
          <Chart />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid #EAEAEA",
              paddingTop: "14px",
            }}
          ></Box>
        </Card>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <NotPopular width={"787px"} />

          <Card sx={{ width: "354px", marginTop: "9px", padding: "16px" }}>
            <Chart2 />
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default ListenTime;
