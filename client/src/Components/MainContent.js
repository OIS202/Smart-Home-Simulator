// MainContent.js
import React from 'react';
import { Box } from '@mui/material';
import logoSrc from '../House.jpg';

const MainContent = () => {
  // Replace the path with your actual image path or URL
  const imageUrl = 'C:\Users\elalf\Desktop\Smart-Home-Simulator\client\src\iHomeLogo.png'; // Local file in public folder or an external URL

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // Adjust as needed
        width: '100%', // Adjust as needed
      }}
    >
      <img src={logoSrc} alt="House" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Box>
  );
};

export default MainContent;
