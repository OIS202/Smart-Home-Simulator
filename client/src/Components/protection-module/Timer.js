import * as React from "react";
import { useContext, useState } from "react";

import { IconButton, Typography, Button, Box, Alert } from "@mui/material";

import SetTimer from "./SetTimer";

import DeviceContext from "../contexts/DeviceContext";
import ProtectionContext from "../contexts/ProtectionContext";
// import CreateZone from "./CreateZone";

export default function MotionSensors(props) {
  const { isOn, info } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;

  const { alarm, countdown } = useContext(ProtectionContext);
  const [alarmState, setAlarmState] = alarm;
  const [countdownState, setCountdownState] = countdown;

  const police = () => {
    if (countdownState === 0) {
      return (
        <Alert
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "auto 15px",
            width: "80%",
          }}
          severity="error"
        >
          POLICE ON THE WAY
        </Alert>
      ); // If temperature is under 10, return true
    }
  };

  if (props.source === "module") {
    return (
      <>
        <Box sx={{ margin: "20px auto" }}>
          <Typography variant="h6">
            {alarmState ? `Timer Activated` : `Timer Deactivated`}
          </Typography>
          <br />
          <Typography variant="h7">
            {alarmState &&
              `${
                countdownState > 0
                  ? `Authorities will be contacted in: ${countdownState}`
                  : ``
                //   : `Authorities are on the way`
              }`}
          </Typography>
          {police()}
          <SetTimer source="module" />
        </Box>
      </>
    );
  }

  //   if (props.source === "layout") {
  //     return (
  //       <>
  //       </>
  //     );
  //   }
}
