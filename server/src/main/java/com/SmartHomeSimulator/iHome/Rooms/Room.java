package com.SmartHomeSimulator.iHome.Rooms;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.SmartHomeSimulator.iHome.Zone.Zone;

@Document(collection = "rooms")
public class Room {
    @Id
    private ObjectId id;
    private String name;
    private ObjectId zoneId;
    private ObjectId houseId;
    private double actualTemp;
    private double desiredTemp;

    // Default constructor
    public Room() {
    }

    public Room(String name, double actualTemp, double desiredTemp, ObjectId housId, ObjectId zoneId) {
        this.name = name;
        this.actualTemp = actualTemp;
        this.desiredTemp = desiredTemp;
        this.houseId = housId;
        this.zoneId = zoneId;
    }

    public double getActualTemp() {
        return actualTemp;
    }

    public double getDesiredTemp() {
        return desiredTemp;
    }

    public ObjectId getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public ObjectId getZoneId() {
        return zoneId;
    }

    public ObjectId getHouseId() {
        return houseId;
    }

    public void setActualTemp(double actualTemp) {
        this.actualTemp = actualTemp;
    }

    public void setDesiredTemp(double desiredTemp) {
        this.desiredTemp = desiredTemp;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setZoneId(ObjectId zoneId) {
        this.zoneId = zoneId;
    }

    public void setHouseId(ObjectId houseId) {
        this.houseId = houseId;
    }

}
