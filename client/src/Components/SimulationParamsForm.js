import React, { useState, useEffect } from "react";
import AddUserButton from "./AddUserButton";
import {
  TextField,
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@mui/material";



const SimulationParamsForm = () => {

  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetchUserId();
  }, []);

  const houseId = '65fcdf7132513f5cebd28837';
  const fetchUserId = async () => {
    try {
      const response = await fetch(`http://localhost:8080/getUsersId?houseId=${houseId}`);
      const data = await response.json();
      setUsers(data);
    }
    catch(error) {
    console.error("faled to fetch specided users", error);
    }
  } 

  return (
    <>
      <Typography variant="h3">
          Simulation Parameters
      </Typography>
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%"
            }}
          > 
            <Typography variant="h4">
              List of User Profiles
            </Typography>
            <AddUserButton />
          </Box>

          <Table>
            <TableBody>
              {users.map((user) => (
                  <TableRow>
                    <TableCell>
                      {user.firstName} {user.lastName}
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

export default SimulationParamsForm;
