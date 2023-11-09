import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Logo from "../../../public/icons/logo.svg";
import "./loginStyle.scss";
const Login = () => {
  return (
    <Grid container component="main" className="container">
      <Grid item xs={false} sm={4} md={7} className="left-side" />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        className="right-side"
      >
        <Box
          sx={{
            my: 8,
            height: "423px",
            width:'300px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box className="logo-container">
            <img src={Logo} alt="listenable"  />
          </Box>
          <Box className="form-container">
            <Typography className="title">Log in</Typography>
            <Typography className="subtitle">
              Welcome back! Please enter your details.
            </Typography>
          </Box>
          <Box component="form">
            <Box className="form-inputs">
              <Typography className="label">Name</Typography>
              <TextField
                name="name"
                fullWidth
                size="small"
                id="name"
                placeholder="Name"
                sx={{ my: 1 }}
              />
            </Box>
            <Box className="form-inputs">
              <Typography className="label">Password</Typography>
              <TextField
                type="password"
                name="password"
                fullWidth
                size="small"
                placeholder="Password"
                sx={{ my: 1 }}
              />
            </Box>
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#F155BD",
              color: "#fff",
              "&:hover": {
                bgcolor: "#F155BD",
              },
            }}
          >
            Log In
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
