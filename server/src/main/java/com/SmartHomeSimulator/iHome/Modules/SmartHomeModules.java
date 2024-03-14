package com.SmartHomeSimulator.iHome.Modules;

import java.util.List;

import com.SmartHomeSimulator.iHome.Observer;

public class SmartHomeModules implements Observer {
    List<Object> modules;

    @Override
    public void update(String context) {
        System.out.println("Recieved update on :"+context);
    }

    
}
