// EditDevice.js
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
const device = ["light", "door", "window"];

const locations = ["Living Room", "Kitchen", "Bedroom", "Bathroom", "Outside"];
const objectsToBlock = ["Chair", "Table", "Box", "None"];

const EditDevice = () => {
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
        Edit Device
      </Button>
      <Dialog
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Edit Device</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Choose The Device</Typography>
          <FormControl fullWidth margin="normal" key={device}>
            <InputLabel>{`Device`}</InputLabel>
            <Select
              value={device}
              label={`device`}
              onChange={(event) =>
                handleInhabitantLocationChange(device, event)
              }
            >
              {device.map((dev) => (
                <MenuItem key={dev} value={dev}>
                  {dev}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditDevice;
