import React, { Component } from 'react';
import { Box, Typography, Paper } from '@mui/material';

class ConsoleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logEntries: []
    };
  }

  componentDidMount() {
    this.loadLogEntries();
    // Adding event listener for storage changes across tabs
    window.addEventListener('storage', this.handleStorageChange);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.handleStorageChange);
  }

  handleStorageChange = () => {
    this.loadLogEntries();
  };

  loadLogEntries = () => {
    const logs = JSON.parse(localStorage.getItem('simulationLogs')) || [];
    this.setState({ logEntries: logs });
  };

  render() {
    return (
      <Paper style={{
        position: 'fixed',
        bottom: '20px',
        left: 0,
        right: 0,
        width: '100%',
        maxHeight: '150px',
        overflowY: 'auto',
        backgroundColor: '#f1f1f1',
        border: '1px solid #ccc',
        padding: '10px',
        zIndex: 1000 // Ensure it's above other content
      }}>
        <Typography variant="h6" style={{ marginBottom: '10px' }}>Simulation Console</Typography>
        <Box style={{
          whiteSpace: 'nowrap',
          overflowY: 'scroll'
        }}>
          {this.state.logEntries.map((entry, index) => (
            <Typography key={index} style={{
              fontFamily: 'monospace',
              whiteSpace: 'pre'
            }}>
              {entry}
            </Typography>
          ))}
        </Box>
      </Paper>
    );
  }
}

export default ConsoleComponent;
