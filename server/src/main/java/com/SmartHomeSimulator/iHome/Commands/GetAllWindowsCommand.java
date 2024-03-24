package com.SmartHomeSimulator.iHome.Commands;

import com.SmartHomeSimulator.iHome.Receivers.RoomReceiver;

public class GetAllWindowsCommand {
    private RoomReceiver request;

    public GetAllWindowsCommand(RoomReceiver request) {
        this.request = request;
    }

    public void execute() {
        System.out.println("Get all windows");
    }
}
