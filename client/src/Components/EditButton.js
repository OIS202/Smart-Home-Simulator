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

// Mock data for windows, you can replace it with your actual data
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
          [user.id]: user.location,
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

  const handleUserLocationChange = (userId, newLocation) => {
    setUserLocations((prev) => ({ ...prev, [userId]: newLocation }));
    console.log(userId);
    console.log(newLocation);
  };

  const handleWindowBlockChange = (windowId, event) => {
    setWindowBlocks((prev) => ({ ...prev, [windowId]: event.target.value }));
  };

  const handleSave = async () => {
    // Save user locations
    await Promise.all(
      users.map(async (user) => {
        if (userLocations[user.id] !== user.location) {
          await updateUserLocation(user.id, userLocations[user.id]);
        }
      })
    );

    // TODO: Save window blocks here. Implement this part based on how your backend expects to receive this information.

    handleCloseEditModal();
    fetchAllUsers(); // Refresh users list after update
  };

  const updateUserLocation = async (userId, newLocation) => {
    try {
      await fetch("http://localhost:8080/updateUserLocation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, location: newLocation }),
      });
    } catch (error) {
      console.error("Error updating user location", error);
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
                  <TableRow key={user.id}>
                    <TableCell>
                      {user.firstName} {user.lastName}
                    </TableCell>
                    <TableCell align="right">{user.location}</TableCell>
                    <TableCell align="right">
                      <FormControl fullWidth>
                        <InputLabel>Location</InputLabel>
                        <Select
                          value={userLocations[user.id] || ""}
                          label="Location"
                          onChange={(event) =>
                            handleUserLocationChange(
                              user.id,
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
                          value={windowBlocks[window.id] || "None"} // Default to 'None' if not set
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
