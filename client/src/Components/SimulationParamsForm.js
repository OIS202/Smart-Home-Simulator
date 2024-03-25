import React, { useState, useEffect } from "react";
import AddUserButton from "./AddUserButton";
import AddTemperatureCsvButton from "./AddTemperatureCsvButton";
import {
  TextField,
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SimulationParamsForm = () => {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserId();
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const houseId = "65fcdf7132513f5cebd28837";

  const fetchUserId = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/getUsersId?houseId=${houseId}`,
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("faled to fetch specified users", error);
    }
  };

  const handleSubmit = async (event) => {
    console.log(time);
    event.preventDefault();
    const requestData = {
      users: users.map((user) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
        houseId: user.houseId,
        userType: user.userType,
      })),
      date,
      time,
    };

    try {
      const response = await fetch("http://localhost:8080/startsimulation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(requestData), // Convert object to JSON
      });
      if (response.status == 200) {
        console.log("Simulation has started");
        setSuccessMessage("Successfully added a user");
        setSnackbarOpen(true); // Open Snackbar
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      } else {
        const errorText = await response.text();
        setError(errorText || "Add User failed");
      }
    } catch (error) {
      setError("Netowrk error, please try again later");
    }
  };

  return (
    <>
      <Typography variant="h3">Simulation Parameters</Typography>
      <form onSubmit={handleSubmit}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "normal",
            minHeight: "30vh",
            border: "2px solid black",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h4">List of User Profiles</Typography>
            <AddUserButton />
            <AddTemperatureCsvButton />
          </Box>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Users</TableCell>
                <TableCell>Type of User</TableCell>
                <TableCell>Has SHS Access</TableCell>
                <TableCell>Has SHC Access</TableCell>
                <TableCell>Has SHP Access</TableCell>
                <TableCell>Has SHH Access</TableCell>
                <TableCell>Location Dependancy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow>
                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      value={`${user.firstName} ${user.lastName}`}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                  <TableCell> {`${user.userType}`}</TableCell>
                  <TableCell> {`${user.hasSHSPermission}`}</TableCell>
                  <TableCell> {`${user.hasSHCPermission}`}</TableCell>
                  <TableCell> {`${user.hasSHPPermission}`}</TableCell>
                  <TableCell> {`${user.hasSHHPermission}`}</TableCell>
                  <TableCell>
                    {" "}
                    {user.userType === "PARENT"
                      ? "Independant of Location"
                      : "Must be Inside House"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        <Box
          style={{
            backgroundColor: "#FFFFFF",
            minHeight: "20vh",
            display: "flex",
            flexDirection: "column",
            border: "2px solid black",
            padding: 20,
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#0A1929", color: "white", margin: 8 }}
          >
            Set Up Simulation
          </Button>
        </Box>
      </form>
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
          Simulation successfully created! The page will now refresh
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default SimulationParamsForm;
