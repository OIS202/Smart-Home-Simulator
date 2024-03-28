// OutputConsole.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const OutputConsole = ({ logFilePath }) => {
  const [logEntries, setLogEntries] = useState([]);

  useEffect(() => {
    // Your log-fetching logic will go here
    setLogEntries(["[10:40] [Doors] Main door was opened by parent request"]);
  }, [logFilePath]);

  return (
    <Paper style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 40px)',
      maxHeight: '150px',
      overflowY: 'auto',
      backgroundColor: '#f1f1f1',
      border: '1px solid #ccc',
      padding: '10px',
      boxSizing: 'border-box'
    }}>
      <Typography variant="h6" style={{ fontWeight: 'bold' }}>Output console</Typography>
      <Box style={{ maxHeight: '100px', overflowY: 'scroll' }}>
        {logEntries.map((entry, index) => (
          <Typography key={index} style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
            {entry}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default OutputConsole;
