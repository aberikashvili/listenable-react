import { Box, Typography } from "@mui/material";
import "./user.scss";
import { useStore } from "../../../utils/useStore";
function UserProfile() {
  const { isThemeChange } = useStore();
  return (
    <Box sx={{ cursor: "pointer", marginTop: "26px" }}>
      <Box
        sx={
          isThemeChange
            ? {
                borderTop: "1px solid rgba(240, 240, 240, 1)",
                borderBottom: "1px solid rgba(240, 240, 240, 1)",
                padding: "18px 0px 18px 18px",
              }
            : {
                borderTop: "1px solid rgba(52, 52, 52, 1)",
                borderBottom: "1px solid rgba(52, 52, 52, 1)",
                padding: "18px 0px 18px 18px",
              }
        }
      >
        <Box sx={{ display: "flex" }}>
          <img src="/src/images/Rectangle 66.png" alt="" />
          <Box sx={{ marginLeft: "12px" }}>
            <Typography
              className="user__text"
              sx={
                isThemeChange
                  ? { fontWeight: "600", color: "rgba(18, 17, 17, 1)" }
                  : { fontWeight: "600", color: "white" }
              }
            >
              Tommy owen
            </Typography>
            <Typography
              className="user__text"
              sx={{ color: "rgba(144, 144, 144, 1)" }}
            >
              Show Director
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default UserProfile;
