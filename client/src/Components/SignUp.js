import React, { useState } from "react";
import {
  Paper,
  Tab,
  Tabs,
  TextField,
  Button,
  Link,
  Box,
  Typography,
} from "@mui/material";
import logoSrc from "../iHomeLogo.png"; // Ensure this path correctly points to your logo image

const SignUp = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [file, setFile] = useState("");

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Set the file to the first file selected
  };

  return (
    <Box
      style={{
        backgroundColor: "#2330A5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Icon and App Name positioned at the top, outside the Paper component */}
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
          width: "auto",
          maxWidth: "500px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Tabs
          value={selectedTab}
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
          <Link
            href="#"
            style={{ display: "block", textAlign: "center", margin: 8 }}
          >
            Already have an account? Sign In
          </Link>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;
