package com.SmartHomeSimulator.iHome.Commands;

import com.SmartHomeSimulator.iHome.Receivers.RoomReceiver;

public class GetAllDoorsCommand {
    private RoomReceiver request;

    public GetAllDoorsCommand(RoomReceiver request) {
        this.request = request;
    }

    public void execute() {
        System.out.println("Get all doors");
    }
}
