import { Box, Typography } from "@mui/material";
import Chart from "../Chart";

function LinerChart({ theme }: any) {
  return (
    <Box>
      <Box m="20" height="187px">
        <Chart />
      </Box>
      <Box
        sx={{
          paddingTop: "40px",
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
              border: "4px solid #009C99",
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
            verage retention time / %
          </Typography>
        </Box>
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
              border: "4px solid #FFB264",
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
            5min retention %
          </Typography>
        </Box>
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
            {">5min retention %"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LinerChart;
