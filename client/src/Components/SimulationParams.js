import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Input,
  Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";


const SimulationParams = () => {
  return (
    <>
      <form>
        <Box 
          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "normal",
              minHeight: "30vh",
              border: "2px solid black",
              justifyContent: "space-between",
              padding: "20px"             
          }}
        >

          <Box
              marginBottom={5}
              style={{
              alignItems: "center",
              justifyContent: "normal",
          }}
          > 
            <Typography variant="h4">
              List of User Profiles
            </Typography>
              <Button
              type="button"
              fullWidth
              variant="contained"
              >
              Edit List 
              </Button>
              <Divider></Divider>
          </Box>
  
        <Input  name="hardcodedField1" value="John"></Input>
        <Input  name="hardcodedField2" value="Doe"></Input>
        <Input  name="hardcodedField3" value="Jane"></Input>

        <Button
        type="button"    
        variant="contained"
        style={{alignSelf: 'center'}}
        >
        Login user profile 
        </Button>

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
            
          <TextField  margin="normal" fullWidth type="date" required />
          <TextField
            margin="normal"
            fullWidth
            type="time"
            required
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
    </>
  );
};

export default SimulationParams;
