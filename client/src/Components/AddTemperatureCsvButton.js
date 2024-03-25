// EditButton.js
import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AddTemperatureCsvButton = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [file, setFile] = useState("");


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
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
    const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http://localhost:8080/readtemperatures", {
        method: "POST",
        body: formData,
        });

        if (response.status == 200) {
        handleCloseEditModal();
        setSuccessMessage("Successfully added the temperature CSV file");
        setSnackbarOpen(true); // Open Snackbar
        setTimeout(function () {
          window.location.reload();
        }, 3000);
        } else {
        const errorText = await response.text();
        setError(errorText || "Add User failed");
      }
    } catch (error) {
        setError("Network error, please try again later.");
    }
    
  }


  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
      <Button
        variant="contained"
        onClick={handleOpenEditModal}
        size="small"
        sx={{ my: 2 }}
      >
        Add Temperature File
      </Button>
      <Dialog
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Insert the CSV file containaing the list of temperatures </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
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
              Submit CSV file
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          The CSV file has sussessfully been uploaded! The page will now refresh
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default AddTemperatureCsvButton;
