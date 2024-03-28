package com.SmartHomeSimulator.iHome.Commands;

import com.SmartHomeSimulator.iHome.Receivers.LightReceiver;

public class LightOffCommand {
    private LightReceiver request;

    public LightOffCommand(LightReceiver request) {
        this.request = request;
    }

    public void execute() {
        System.out.println("Turn off light");
    }
}
