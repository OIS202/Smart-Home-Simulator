import React from 'react';
import NavBar from './Components/NavBar';
import SimulationSidebar from './Components/SimulationSidebar';
import SignUp from './Components/SignUp';
import SimulationParams from './Components/SimulationParams';
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


const SHS = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <NavBar />
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <SimulationSidebar /> 
                <Box
                sx={{ width: '40%' }}
                >
                    <SimulationParams></SimulationParams>
                </Box>

            </Box>
        </Box>
    );
}

export default SHS;