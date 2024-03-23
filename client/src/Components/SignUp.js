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
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoSrc from "../assets/iHomeLogo.png";
import backgroundSrc from "../assets/Background.jpg";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChangeTab = (event, newValue) => {
    if (newValue === 0) {
      navigate("/signin");
    } else {
      navigate("/signup");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        body: formData,
      });

      if (response.status == 200) {
        console.log("Signup successful");
        setSuccessMessage("Signed up successfully! Redirecting to sign in..."); // Set success message
        setTimeout(() => navigate("/signin"), 1000); // Navigate to sign-in page after 5 seconds
      } else {
        const errorText = await response.text();
        setError(errorText || "Signup failed");
      }
    } catch (error) {
      setError("Network error, please try again later.");
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCloseError = () => {
    setError("");
  };
  const handleCloseSuccessMessage = () => {
    setSuccessMessage("");
  };


  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: isSmallScreen ? "center" : undefined,
        backgroundColor: "#2330A5",
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
            value={1}
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
              label="First Name"
              margin="normal"
              fullWidth
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              margin="normal"
              fullWidth
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
              label="Phone Number"
              margin="normal"
              fullWidth
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
                accept=".csv"
              />
            </Button>
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
              Sign Up
            </Button>
          </form>
        </Paper>
      </Box>
      <Snackbar
        open={!!error}
        onClose={handleCloseError}
        autoHideDuration={4000}
        message={error}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Error message will appear at the top-center
      />
      <Snackbar
        open={!!successMessage}
        onClose={handleCloseSuccessMessage}
        autoHideDuration={5000}
        message={successMessage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
      <Snackbar
        open={!!error}
        onClose={handleCloseError}
        autoHideDuration={4000}
        message={error}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Error message will appear at the top-center
      />
      <Snackbar
        open={!!successMessage}
        onClose={handleCloseSuccessMessage}
        autoHideDuration={5000}
        message={successMessage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Box>
  );
};

export default SignUp;
