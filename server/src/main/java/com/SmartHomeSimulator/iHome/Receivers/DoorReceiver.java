package com.SmartHomeSimulator.iHome.Receivers;

import org.bson.json.JsonObject;

public class DoorReceiver {

    private String baseUrlString;

    public void operation(JsonObject request){
        System.out.println(request+" is underway");
    }
}
