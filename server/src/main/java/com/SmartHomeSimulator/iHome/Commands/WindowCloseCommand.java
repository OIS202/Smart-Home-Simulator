package com.SmartHomeSimulator.iHome.Commands;

import com.SmartHomeSimulator.iHome.Receivers.WindowReceiver;

public class WindowCloseCommand {
    private WindowReceiver request;

    public WindowCloseCommand(WindowReceiver request){
        this.request = request;
    }
    
    public void execute(){
        System.out.println("Close Window");
    }
}
