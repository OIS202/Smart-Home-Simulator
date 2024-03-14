package com.SmartHomeSimulator.iHome.Commands;

import com.SmartHomeSimulator.iHome.Receivers.LightReceiver;

public class LightOnCommand {
    private LightReceiver request;

    public LightOnCommand(LightReceiver request){
        this.request = request;
    }
    
    public void execute(){
        System.out.println("Turn on light");
    }
}
