import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import logoSrc from "../assets/iHomeLogo.png"; // Adjust the path as necessary

const SignIn = () => {
  const navigate = useNavigate();

  // Function to handle tab change
  const handleChangeTab = (event, newValue) => {
    if (newValue === 1) {
      navigate("/signup"); // Adjust the path as necessary
    } else {
      navigate("/signin"); // Ensures we stay on the signIn page if the signIn tab is clicked again
    }
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
          maxWidth: "400px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Tabs
          value={0} // Assuming SignIn is the first tab, so its index is 0
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
            style={{ backgroundColor: "#0A1929", color: "white", margin: 8 }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default SignIn;
