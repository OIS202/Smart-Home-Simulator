package com.SmartHomeSimulator.iHome.devices;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "devices")
public class Device {

    @Id
    private String id;
    private String type;
    private String location;
    private String name;
    private boolean isOn;
    private ObjectId houseId;
    private ObjectId roomId;

    // Constructors
    public Device() {
    }

    public Device(String type, String location, String name) {
        this.type = type;
        this.location = location;
        this.name = name;
        this.isOn = false;
    }

    // Getters
    public String getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getLocation() {
        return location;
    }

    public String getName() {
        return name;
    }

    public boolean getIsOn() {
        return isOn;
    }

    // Setters
    public void setId(String id) {
        this.id = id;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setIsOn(boolean isOn) {
        this.isOn = isOn;
    }

    public ObjectId getHouseId() {
        return houseId;
    }

    public void setHouseId(ObjectId houseId) {
        this.houseId = houseId;
    }

    public ObjectId getRoomId() {
        return roomId;
    }

    public void setRoomId(ObjectId roomId) {
        this.roomId = roomId;
    }
}
