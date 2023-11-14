import { Box, Card, Typography } from "@mui/material";
import NotPopular from "../../components/centralComponents/notPopular/NotPopular";
import Sidebar from "../../components/sidebar/sidebar";
import Charts from "./Charts";
import EpisodeTable from "./Table";

function Episode() {
  const table = [
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
          sx={{
            width: "1156px",
            height: "505px",
            margin: "16px",
            padding: "16px",
          }}
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
              sx={{
                color: "#121111",
                fontFamily: "roboto",
                fontSize: "16px",
                fontWeight: "500",
              }}
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
                    sx={{
                      fontFamily: "roboto",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#121111",
                    }}
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
                  <span style={{ color: "#121111" }}>11:00</span>
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
                  <span style={{ color: "#121111" }}>11:00</span>
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
                  <span style={{ color: "#121111" }}>11:00</span>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "30px", padding: "15px" }}>
              <Typography>Demographics</Typography>
              <Typography>Listen tim</Typography>
              <Typography>Segments</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid #EAEAEA",
              paddingTop: "14px",
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

        <NotPopular></NotPopular>
      </Box>
    </Box>
  );
}

export default Episode;
