import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Tab,
  Tabs,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logoSrc from "../assets/iHomeLogo.png"; // Adjust the path as necessary

const SignIn = () => {
  const navigate = useNavigate();
  const theme = useTheme(); // Use the theme from MUI
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjust breakpoint as necessary

  const handleChangeTab = (event, newValue) => {
    if (newValue === 1) {
      navigate("/signup");
    } else {
      navigate("/signin");
    }
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: isSmallScreen ? "center" : undefined,
        backgroundColor: "#2330A5", // Consistent background color
      }}
    >
      <Box
        style={{
          display: isSmallScreen ? "none" : "block",
          width: "60%",
          backgroundImage: `url(${backgroundSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Box
        style={{
          width: isSmallScreen ? "100%" : "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginBottom={2}
        >
          <img src={logoSrc} alt="iHome logo" style={{ marginRight: 10 }} />
          <Typography variant="h5" style={{ color: "#FFFFFF" }}>
            iHome
          </Typography>
        </Box>

        <Paper
          elevation={10}
          style={{
            padding: 20,
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Tabs
            value={0}
            onChange={handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="SIGN IN" />
            <Tab label="SIGN UP" />
          </Tabs>
          <form>
            <TextField
              label="Email"
              margin="normal"
              fullWidth
              type="email"
              required
            />
            <TextField
              label="Password"
              margin="normal"
              fullWidth
              type="password"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#0A1929",
                color: "white",
                margin: "8px 0",
              }}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignIn;
