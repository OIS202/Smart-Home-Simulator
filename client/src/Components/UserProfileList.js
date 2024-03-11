import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Tab,
  Tabs,
  Divider,
} from "@mui/material";
import logoSrc from "../iHomeLogo.png"; // Adjust the path as necessary

const UserProfileList = () => {
    return (
    <Box
        style={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        border: "2px solid black"
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
            <Divider></Divider>
        </Box>

        <Box 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "normal"
                
            }}
        >
            <Typography display="block" gutterBottom>
            John 
            </Typography>
            <Typography display="block" gutterBottom>
            Doe
            </Typography>
            <Typography display="block" gutterBottom>
            Jane
            </Typography>

        </Box>


    </Box>
    )
};

export default UserProfileList;
