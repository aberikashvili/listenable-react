import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./logout.scss";
import LogOutPopUp from "./logoutPopup/logoutpopup";
import { useStore } from "../../../utils/useStore";

function Logout() {
  const { setIsOpen } = useStore();
  return (
    <>
      <Box
        onClick={() => setIsOpen(true)}
        sx={{ marginTop: "32px", marginLeft: "17px", display: "flex" }}
      >
        <img src="/src/images/Log_Out.png" alt="" />
        <Typography className="logout__text">Log Out</Typography>
      </Box>
      <LogOutPopUp />
    </>
  );
}

export default Logout;
