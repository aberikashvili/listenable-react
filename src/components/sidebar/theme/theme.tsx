// importing Mui
import { Box, Typography } from "@mui/material";
// importing Scss
import "./theme.scss";
// import useStore
import { useStore } from "../../../utils/useStore";
function Theme() {
  const { isThemeChange, setIsThemeChange } = useStore();

  const darkStyle = {
    display: "flex",
    background: isThemeChange ? "rgb(219,219,219)" : "rgba(23, 23, 23, 1)",
    border: isThemeChange ? "" : "1px solid rgba(52, 52, 52, 1)",
    padding: "4px",
    borderRadius: "5px",
    justifyContent: "space-between",
  };

  return (
    <Box sx={{ marginTop: "75px", maxWidth: "220px" }}>
      <Box sx={darkStyle}>
        <Box
          onClick={() => setIsThemeChange(!isThemeChange)}
          sx={
            isThemeChange
              ? {
                  borderRadius: "5px",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center",
                  background: "white",
                }
              : {
                  borderRadius: "5px",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center",
                }
          }
        >
          <img
            style={{ marginRight: "6px" }}
            src="/src/images/Group 630.png"
            alt=""
          />
          <Typography
            className="theme__text"
            sx={
              isThemeChange
                ? {
                    color: "rgba(18, 17, 17, 1)",
                    fontWeight: "400",
                    fontSize: "12px",
                  }
                : {
                    // display:"none"
                    color: "white",
                    fontWeight: "600",
                    fontSize: "12px",
                  }
            }
          >
            Light Mode
          </Typography>
        </Box>
        <Box
          onClick={() => setIsThemeChange(!isThemeChange)}
          sx={
            isThemeChange
              ? {
                  borderRadius: "5px",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center",
                }
              : {
                  background: "rgba(30, 30, 30, 1)",
                  border: "1px solid rgba(52, 52, 52, 1)",
                  borderRadius: "5px",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center",
                }
          }
        >
          <img
            style={{ marginRight: "6px" }}
            src="/src/images/Group 631.png"
            alt=""
          />
          <Typography
            className="theme__text"
            sx={
              isThemeChange
                ? {
                    color: "rgba(18, 17, 17, 1)",
                    fontWeight: "400",
                    fontSize: "12px",
                  }
                : {
                    color: "white",
                    fontWeight: "600",
                    fontSize: "12px",
                  }
            }
          >
            Dark Mode
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Theme;
