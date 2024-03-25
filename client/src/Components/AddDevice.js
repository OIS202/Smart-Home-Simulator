// AddDevice.js
import React, { useState } from "react";
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

// Mock data for dropdowns
const inhabitants = ["John", "Doe", "Jane"];
const windows = [
  { id: 1, location: "Living Room" },
  { id: 2, location: "Kitchen" },
];
const locations = ["Living Room", "Kitchen", "Bedroom", "Bathroom", "Outside"];
const objectsToBlock = ["Chair", "Table", "Box", "None"];

const AddDevice = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [inhabitantLocations, setInhabitantLocations] = useState(
    inhabitants.reduce((acc, cur) => ({ ...acc, [cur]: "" }), {})
  );
  const [windowBlocks, setWindowBlocks] = useState(
    windows.reduce((acc, cur) => ({ ...acc, [cur.id]: "" }), {})
  );

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSave = () => {
    console.log("Inhabitant Locations:", inhabitantLocations);
    console.log("Window Blocks:", windowBlocks);
    handleCloseEditModal(); // Close the modal after saving
  };

  const handleInhabitantLocationChange = (inhabitant, event) => {
    setInhabitantLocations({
      ...inhabitantLocations,
      [inhabitant]: event.target.value,
    });
  };

  const handleWindowBlockChange = (windowId, event) => {
    setWindowBlocks({ ...windowBlocks, [windowId]: event.target.value });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
      <Button
        variant="contained"
        onClick={handleOpenEditModal}
        size="small"
        sx={{ my: 2 }}
      >
        Add Device
      </Button>
      <Dialog
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Edit House Settings</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Assign Inhabitants</Typography>
          {inhabitants.map((name) => (
            <FormControl fullWidth margin="normal" key={name}>
              <InputLabel>{`${name}'s Location`}</InputLabel>
              <Select
                value={inhabitantLocations[name]}
                label={`${name}'s Location`}
                onChange={(event) =>
                  handleInhabitantLocationChange(name, event)
                }
              >
                {locations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
          <TableContainer component={Box} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Window ID</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Block Movement</TableCell>
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
                          value={windowBlocks[window.id]}
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

export default AddDevice;
