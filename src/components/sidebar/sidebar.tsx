import {Link} from "react-router-dom"
import "../../mixin.scss";
import "./navbar.scss";
// importing mui

import { Box, Typography } from "@mui/material";
// icons from png
import AudioIcon from "../../Icons/Audio.jsx";
import SearchIcon from "../../Icons/Search";
import PlayListIcon from "../../Icons/Audio-Playlist";
import ComputerIcon from "../../Icons/Computer";
import MicrophoneIcon from "../../Icons/Microphone";

import Home from "../../Icons/Home";

import Navbar from "./navbar/navbar";
import { useStore } from "../../utils/conextapi/useStore";
import Theme from "./theme/theme";
import UserProfile from "./User/user";
import Logout from "./logoutbutton/logout";
import { useEffect, useState } from "react";
export default function Sidebar() {
  const { currectPage, setCurrectPage, isThemeChange } = useStore();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width when the window is resized
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      className="sidebar__container"
      sx={
        isThemeChange
          ? { borderRight: "1px solid rgba(240, 240, 240, 1)" }
          : { borderRight: "1px solid rgba(52, 52, 52, 1)" }
      }
    >
      <Link to={"/dashboard"}>
        <img
          className="sidebar__logo"
          style={{ padding: "28px 72px 0px 17px", cursor: "pointer" }}
          src="/src/images/Logo.png"
          alt=""
        />
        <img
          className="sidebar__responsive_logo"
          src="/src/images/responsvieLogo.png"
        />
      </Link>
      <Box sx={{ marginTop: "60px" }}>
        {/* Title Here */}
        <Box>
          <Typography
            sx={{ marginLeft: "16px" }}
            className="nav__text"
          >
            Navigation
          </Typography>
        </Box>

        <Link
          style={{ textDecoration: "none" }}
          to={"/dashboard"}
          onClick={() => setCurrectPage("dashboard")}
        >
          <Navbar
            Title={windowWidth > 1133 ? "Dashboard" : "Home"}
            Icon={<Home />}
            active={currectPage === "dashboard"}
          />
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          to={"/demographics"}
          onClick={() => setCurrectPage("demographics")}
        >
          <Navbar
            Title={windowWidth > 1133 ? "Demographics" : "Graphics"}
            Icon={<SearchIcon />}
            active={currectPage === "demographics"}
          />
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/popularsegment"}>
          <Navbar
            Title={windowWidth > 1133 ? "Popular Segments" : "Segments"}
            Icon={<PlayListIcon />}
            active={currectPage === "Popular Segments"}
          />
        </Link>
        <Link style={{ textDecoration: "none" }} to={"popularepisodes"}>
          <Navbar
            Title={windowWidth > 1133 ? "Popular Episodes" : "Episodes"}
            Icon={<AudioIcon />}
            active={currectPage === "Popular Episodes"}
          />
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/generaltrafic"}>
          <Navbar
            Title={windowWidth > 1133 ? "General Traffic" : "Traffic"}
            Icon={<ComputerIcon />}
            active={currectPage === "General Traffic"}
          />
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/populartopics"}>
          <Navbar
            Title={windowWidth > 1133 ? "Popular Topics" : "Topics"}
            Icon={<MicrophoneIcon />}
            active={currectPage === "Popular Topics"}
          />
        </Link>
      </Box>
      <Theme />
      <UserProfile />
      <Logout />
    </Box>
  );
}
