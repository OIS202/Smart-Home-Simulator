// In logDeviceChange.js or wherever you define this function
export const logDeviceChange = (deviceType, deviceId, newState) => {
    const logEntries = JSON.parse(localStorage.getItem('deviceChangeLog')) || [];
    const logMessage = {
      timestamp: new Date().toLocaleString(),
      deviceType,
      deviceId,
      newState: newState ? 'opened' : 'closed',
    };
  
    logEntries.push(logMessage);
    localStorage.setItem('deviceChangeLog', JSON.stringify(logEntries));
  
    // Dispatch a custom event with the updated log entries
    window.dispatchEvent(new CustomEvent('logUpdated', { detail: logEntries }));
  };
  