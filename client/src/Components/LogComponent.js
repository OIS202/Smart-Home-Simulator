import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const LocalStorageConsole = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      const eventInfo = {
        key: e.key,
        newValue: e.newValue,
        oldValue: e.oldValue,
        time: new Date().toLocaleTimeString(),
      };
      setEvents((prevEvents) => [...prevEvents, eventInfo]);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Box sx={{
      overflowY: 'auto',
      maxHeight: '200px', // adjust to your preference
      border: '1px solid #ccc',
      margin: '1em',
      padding: '1em',
      backgroundColor: '#f9f9f9',
      fontFamily: 'monospace',
    }}>
      {events.length > 0 ? (
        events.map((event, index) => (
          <Typography key={index} sx={{ fontFamily: 'inherit' }}>
            [{event.time}] [{event.key}] {event.newValue}
          </Typography>
        ))
      ) : (
        <Typography sx={{ fontFamily: 'inherit' }}>No events yet.</Typography>
      )}
    </Box>
  );
};

export default LocalStorageConsole;
