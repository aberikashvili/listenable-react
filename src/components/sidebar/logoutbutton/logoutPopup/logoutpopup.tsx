import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { useStore } from "../../../../utils/useStore";
import "./logoutpopup.scss";

function LogOutPopUp() {
  const { isOpen, setIsOpen, isThemeChange } = useStore();
  const elementRef = useRef();

  // useEffect(() => {
  //   const outSideClicker = (event) => {
  //     if (elementRef.current && !elementRef.current.contains(event.target)) {
  //         setIsOpen(false)
  //       }
  //     };
  //     document.addEventListener("click", outSideClicker);
  //     return () => {
  //       document.removeEventListener("click", outSideClicker);
  //     };
  //   }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  // inline styless
  const Pstyle: object = {
    cursor: "pointer",
    fontWeight: "700",
    color: isThemeChange ? "rgba(20, 24, 31, 1)" : "white",
    position: "absolute",
    margin: "16px",
    left: "90%",
  };
  // rgba(52, 52, 52, 1)
  const buttonTheme = {
    padding: "8px 50px",
    outline: "none",
    border: isThemeChange ? "none" : "1px solid rgba(52, 52, 52, 1)",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    background: isThemeChange ? "" : "transparent",
    color: isThemeChange ? "" : " white",
  };
  return (
    <Box
      sx={isThemeChange ? {} : { background: "rgba(30, 30, 30, 1)" }}
      className="logout__container"
      ref={elementRef}
    >
      <p style={Pstyle} onClick={() => setIsOpen(false)}>
        X
      </p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin: "30px",
        }}
      >
        <Box className="logout__images">
          <img src="/src/images/Group 1532.png" alt="" />
          <img
            className="logout__icon"
            src="/src/images/whiteLogOut.png"
            alt=""
          />
        </Box>
        <Typography
          sx={
            isThemeChange
              ? { marginTop: "30px", color: "rgba(18, 17, 17, 1)" }
              : { marginTop: "30px", color: "white" }
          }
          className="logout__title"
        >
          Log Out
        </Typography>
        <Typography
          sx={
            isThemeChange
              ? { marginTop: "16px" }
              : { marginTop: "16px", color: "white" }
          }
          className="logout__body"
        >
          Are you sure you want to delete this ? This action cannot be undone
        </Typography>
        <Box className="buttons__container">
          <button onClick={() => setIsOpen(false)} style={buttonTheme}>
            Cancel
          </button>
          <button
            style={{
              background: "rgba(255, 178, 100, 1)",
              color: "white",
              padding: "8px 50px",
              outline: "none",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Log Out
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default LogOutPopUp;
