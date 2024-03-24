import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";

const windows = [
  { id: 1, location: "Living Room" },
  { id: 2, location: "Kitchen" },
];
const objectsToBlock = ["Chair", "Table", "Box", "None"];

const EditButton = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [userLocations, setUserLocations] = useState({});
  const [windowBlocks, setWindowBlocks] = useState(
    windows.reduce((acc, cur) => ({ ...acc, [cur.id]: "" }), {})
  );
  const locations = [
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Bathroom",
    "Outside",
  ];

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/getAllUsers");
      const data = await response.json();
      setUsers(data);
      const initialUserLocations = data.reduce(
        (acc, user) => ({
          ...acc,
          [user.email]: user.location, // Use email as the key
        }),
        {}
      );
      setUserLocations(initialUserLocations);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleUserLocationChange = (email, newLocation) => {
    setUserLocations((prev) => ({ ...prev, [email]: newLocation }));
  };

  const handleWindowBlockChange = (windowId, event) => {
    setWindowBlocks((prev) => ({ ...prev, [windowId]: event.target.value }));
  };

  const handleSave = async () => {
    for (let user of users) {
      if (userLocations[user.email] !== user.location) {
        await updateUserLocation(user.email, userLocations[user.email]);
      }
    }
    handleCloseEditModal();
    fetchAllUsers(); // Refresh users list after update
  };

  const updateUserLocation = async (email, newLocation) => {
    try {
      const response = await fetch(
        "http://localhost:8080/updateUserLocation",
        {
          // Adjust this endpoint as needed
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, location: newLocation }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating user location:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
      <Button
        variant="contained"
        onClick={handleOpenEditModal}
        size="small"
        sx={{ my: 2 }}
      >
        Edit House Settings
      </Button>
      <Dialog
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Edit House Settings</DialogTitle>
        <DialogContent>
          {/* User Location Table */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            User Locations
          </Typography>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User Name</TableCell>
                  <TableCell align="right">Current Location</TableCell>
                  <TableCell align="right">Change Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.email}>
                    {" "}
                    {/* Use email as key for mapping */}
                    <TableCell>
                      {user.firstName} {user.lastName}
                    </TableCell>
                    <TableCell align="right">{user.location}</TableCell>
                    <TableCell align="right">
                      <FormControl fullWidth>
                        <InputLabel>Location</InputLabel>
                        <Select
                          value={userLocations[user.email] || ""}
                          label="Location"
                          onChange={(event) =>
                            handleUserLocationChange(
                              user.email,
                              event.target.value
                            )
                          }
                        >
                          {locations.map((location) => (
                            <MenuItem key={location} value={location}>
                              {location}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Window Block Settings Table */}
          <Typography variant="h6" sx={{ mt: 4 }}>
            Window Block Settings
          </Typography>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Window ID</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Block With</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {windows.map((window) => (
                  <TableRow key={window.id}>
                    <TableCell>{window.id}</TableCell>
                    <TableCell align="right">{window.location}</TableCell>
                    <TableCell align="right">
                      <FormControl fullWidth>
                        <InputLabel>Block with</InputLabel>
                        <Select
                          value={windowBlocks[window.id] || "None"}
                          label="Block with"
                          onChange={(event) =>
                            handleWindowBlockChange(window.id, event)
                          }
                        >
                          {objectsToBlock.map((object) => (
                            <MenuItem key={object} value={object}>
                              {object}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditButton;
