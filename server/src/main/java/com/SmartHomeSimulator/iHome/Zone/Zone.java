package com.SmartHomeSimulator.iHome.Zone;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.SmartHomeSimulator.iHome.Rooms.Room;

@Document(collection = "zones")
public class Zone {
    @Id
    private ObjectId id;
    private String name;
    private double actualTemp;
    private double desiredTemp;
    private ObjectId houseId;

    // Default constructor
    public Zone() {
    }

    public Zone(String name, double actualTemp, double desiredTemp) {
        this.name = name;
        this.actualTemp = actualTemp;
        this.desiredTemp = desiredTemp;
    }

    // Getters
    public ObjectId getId() {
        return id;
    }

    public ObjectId getHouseId() {
        return houseId;
    }

    public String getName() {
        return name;
    }

    public double getActualTemp() {
        return actualTemp;
    }

    public double getDesiredTemp() {
        return desiredTemp;
    }

    // Setters
    public void setId(ObjectId id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setActualTemp(double actualTemp) {
        this.actualTemp = actualTemp;
    }

    public void setDesiredTemp(double desiredTemp) {
        this.desiredTemp = desiredTemp;
    }

    public void setHouseId(ObjectId houseId) {
        this.houseId = houseId;
    }

    public void setHouseId(String houseId) {
        this.houseId = new ObjectId(houseId);
    }
}
