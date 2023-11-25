// importing mui
import { Box, Typography } from "@mui/material";
import "./navbar.scss";
import React from "react";

type NavbarProps = {
  Title:string,
  Icon:React.ReactNode,
  active:unknown
}

function Navbar({ Title, Icon, active }:NavbarProps) {
  return (
    <>
      {/* Nav Bar Here */}
      <Box sx={{ display: "flex", marginTop: "26px" }}>
        {active ? (
          <Box
            sx={{
              border: "2px solid rgba(241, 85, 189, 1)",
              borderRadius: "0px 10px 10px 0",
            }}
          ></Box>
        ) : (
          ""
        )}
        <Box className="navbar" sx={{ display: "flex", marginLeft: "12px" }}>
          {Icon}
          <Typography
            sx={
              active
                ? { color: "rgba(241, 85, 189, 1)", marginLeft: "12px" }
                : { color: "rgba(144, 144, 144, 1)", marginLeft: "12px" }
            }
            className="navbar__title"
          >
            {Title}
          </Typography>
          <Typography
            sx={
              active
                ? { color: "rgba(241, 85, 189, 1)", marginLeft: "12px" }
                : { color: "rgba(144, 144, 144, 1)", marginLeft: "12px" }
            }
            className="navbar__responsive_title"
          >
            {Title}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
