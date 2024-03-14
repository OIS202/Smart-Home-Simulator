package com.SmartHomeSimulator.iHome.Commands;

import com.SmartHomeSimulator.iHome.Receivers.DoorReceiver;

public class DoorOpenCommand {
    private DoorReceiver request;

    public DoorOpenCommand(DoorReceiver request){
        this.request = request;
    }
    
    public void execute(){
        System.out.println("Open Door");
    }
}
