package com.SmartHomeSimulator.iHome.Commands;

import com.SmartHomeSimulator.iHome.Receivers.WindowReceiver;

public class WindowOpenCommand {
    private WindowReceiver request;

    public WindowOpenCommand(WindowReceiver request) {
        this.request = request;
    }

    public void execute() {
        System.out.println("Open Window");
    }
}
