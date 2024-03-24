// EditButton.js
import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
    TextField,
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AddUserButton = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const userSelection = ['PARENT', 'CHILD', 'GUEST', 'STRANGER'];
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setSnackbarOpen(false);
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);
    formData.append("houseId", '65fcdf7132513f5cebd28837') //hardcoded house id until furthter notice 
    formData.append("userType", userType);

    try {
      const response = await fetch("http://localhost:8080/adduser", {
        method: "POST",
        body: formData,
      });

      if (response.status == 200) {
        console.log("Add User successful");
        handleCloseEditModal();
        setSuccessMessage("Successfully added a user"); 
        setSnackbarOpen(true); // Open Snackbar
        setTimeout(function() {
          window.location.reload();
        }, 3000)
    
      } else {
        const errorText = await response.text();
        setError(errorText || "Add User failed");
      }
    } catch (error) {
      setError("Network error, please try again later.");
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
      <Button variant="contained" onClick={handleOpenEditModal} size="small" sx={{ my: 2 }}>
        Add New User
      </Button>
      <Dialog open={isEditModalOpen} onClose={handleCloseEditModal} maxWidth="md" fullWidth>
        <DialogTitle>Add a user</DialogTitle>
        <DialogContent>
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
              User Type *
            </Typography>
            <Select
              margin="normal"
              fullWidth
              required
              value={userType}
              onChange={(e) => setUserType(e.target.value)}

            >
                {userSelection.map((object) => (
                <MenuItem key={object} value={object}>{object}</MenuItem>
              ))}
            </Select>

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
              Register User
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
        Adding user successful! The page will now refresh
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default AddUserButton;
