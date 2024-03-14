package com.SmartHomeSimulator.iHome.Receivers;

import org.bson.json.JsonObject;

public class WindowReceiver {

    private String baseUrlString;

    public void operation(JsonObject request){
        System.out.println(request+" is underway");
    }
}

