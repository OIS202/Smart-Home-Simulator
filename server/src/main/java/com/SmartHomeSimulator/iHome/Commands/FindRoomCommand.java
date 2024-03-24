package com.SmartHomeSimulator.iHome.Commands;

import com.SmartHomeSimulator.iHome.Receivers.RoomReceiver;

public class FindRoomCommand {
    private RoomReceiver request;

    public FindRoomCommand(RoomReceiver request) {
        this.request = request;
    }

    public void execute() {
        System.out.println("Find Room");
    }
}
