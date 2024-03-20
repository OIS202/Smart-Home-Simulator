import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import logoSrc from "../assets/iHomeLogo.png"; // Ensure this path correctly points to your logo image
import backgroundSrc from "../assets/Background.jpg";

const SignUp = () => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const theme = useTheme(); // Use the theme from MUI
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjust breakpoint as necessary

  const handleChangeTab = (event, newValue) => {
    if (newValue === 0) {
      navigate("/signin");
    } else {
      navigate("/signup");
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: isSmallScreen ? "center" : undefined,
        backgroundColor: "#2330A5", // Apply background color consistently
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
            value={1}
            onChange={handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="SIGN IN" />
            <Tab label="SIGN UP" />
          </Tabs>
          <form>
            <TextField label="First Name" margin="normal" fullWidth required />
            <TextField label="Last Name" margin="normal" fullWidth required />
            <TextField
              label="Email"
              margin="normal"
              fullWidth
              type="email"
              required
            />
            <TextField
              label="Phone Number"
              margin="normal"
              fullWidth
              type="tel"
              required
            />
            <TextField
              label="Password"
              margin="normal"
              fullWidth
              type="password"
              required
            />
            <Typography
              variant="body2"
              style={{ marginTop: 16, marginBottom: 8 }}
            >
              House File
            </Typography>
            <Button
              variant="outlined"
              component="label"
              style={{
                display: "block",
                marginBottom: 16,
                backgroundColor: file ? "#eceff1" : "",
              }}
            >
              {file ? file.name : "Choose File"}
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                accept=".txt"
              />
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#0A1929", color: "white", margin: 8 }}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;
