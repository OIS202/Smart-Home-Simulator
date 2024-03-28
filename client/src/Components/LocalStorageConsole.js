import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const LocalStorageConsole = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Function to update logs from local storage or custom event
    const updateLogs = () => {
      const logEntries = JSON.parse(localStorage.getItem('deviceChangeLog')) || [];
      setEvents(logEntries);
    };

    updateLogs(); // Initial update

    // Listen for custom event
    const handleLogUpdate = (event) => {
      setEvents(event.detail);
    };

    window.addEventListener('logUpdated', handleLogUpdate);

    return () => {
      window.removeEventListener('logUpdated', handleLogUpdate);
    };
  }, []);

  return (
    <Box sx={{
      overflowY: 'auto',
      maxHeight: '150px',
      border: '1px solid #ccc',
      margin: '1em',
      padding: '1em',
      fontFamily: 'monospace',
      fontSize: '0.875rem',
      backgroundColor: 'transparent',
    }}>
      {events.map((event, index) => (
        <Typography key={index} sx={{ fontFamily: 'inherit' }}>
          [{event.timestamp}] [{event.deviceType} {event.deviceId}] {event.newState}
        </Typography>
      ))}
    </Box>
  );
};

export default LocalStorageConsole;
