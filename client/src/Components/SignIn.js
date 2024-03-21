import React, { useState } from "react";
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
import logoSrc from "../assets/iHomeLogo.png";
import backgroundSrc from "../assets/Background.jpg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChangeTab = (event, newValue) => {
    if (newValue === 1) {
      navigate("/signup");
    } else {
      navigate("/signin");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Correctly await the parsing of the JSON response
        const user = await response.json(); // This line was corrected
        console.log("Sign in successful. User:", user);

        // Optionally navigate to another route or set state here
        // navigate("/home");
      } else {
        console.error("Sign in failed");
        // Handle server errors or invalid inputs
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      // Handle network errors
    }
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: isSmallScreen ? "center" : undefined,
        backgroundColor: "#2330A5",
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
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              margin="normal"
              fullWidth
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              margin="normal"
              fullWidth
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
