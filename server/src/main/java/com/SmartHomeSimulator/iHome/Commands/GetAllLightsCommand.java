package com.SmartHomeSimulator.iHome.Commands;

import com.SmartHomeSimulator.iHome.Receivers.RoomReceiver;

public class GetAllLightsCommand {
    private RoomReceiver request;

    public GetAllLightsCommand(RoomReceiver request){
        this.request = request;
    }
    
    public void execute(){
        System.out.println("Get all lights");
    }
}
