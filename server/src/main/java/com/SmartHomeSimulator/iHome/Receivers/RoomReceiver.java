package com.SmartHomeSimulator.iHome.Receivers;

import org.bson.json.JsonObject;

public class RoomReceiver {

    private String baseUrlString;

    public void operation(JsonObject request){
        System.out.println(request+" is underway");
    }
}

