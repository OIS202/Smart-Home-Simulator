package com.SmartHomeSimulator.iHome.Commands;

import org.bson.json.JsonObject;

import com.SmartHomeSimulator.iHome.Receivers.DoorReceiver;

public class DoorCloseCommand {
    private DoorReceiver request;

    public DoorCloseCommand(DoorReceiver request) {
        this.request = request;
    }

    public void execute() {
        System.out.println("Close Door");
    }
}
