import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Link,
  Box,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoSrc from "../assets/iHomeLogo.png"; // Ensure this path correctly points to your logo image

const SignUp = () => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handleChangeTab = (event, newValue) => {
    if (newValue === 0) {
      navigate("/signin"); // Adjust the path as necessary
    } else {
      navigate("/signup"); // Ensures we stay on the signUp page if the signUp tab is clicked again
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
          value={1} // Assuming SignUp is the second tab, so its index is 1
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
  );
};

export default SignUp;
