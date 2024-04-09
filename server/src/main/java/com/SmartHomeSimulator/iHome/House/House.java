package com.SmartHomeSimulator.iHome.House;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.Instant;

@Document(collection = "houses")
public class House {
    @Id
    private ObjectId id;
    private int livingRoom;
    private int bedroom;
    private int bathroom;
    private int kitchen;
    private int backyard;
    private int garage;
    private double actualTemperature;
    private boolean awayMode;
    private boolean specialTemperatureCondition;

    // Default constructor
    public House() {
    }

    // Constructor with all parameters
    public House(int livingRoom, int bedroom, int bathroom, int kitchen, int backyard, int garage) {
        this.livingRoom = livingRoom;
        this.bedroom = bedroom;
        this.bathroom = bathroom;
        this.kitchen = kitchen;
        this.backyard = backyard;
        this.garage = garage;
    }

    // Getters and Setters
    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public int getLivingRoom() {
        return livingRoom;
    }

    public void setLivingRoom(int livingRoom) {
        this.livingRoom = livingRoom;
    }

    public int getBedroom() {
        return bedroom;
    }

    public void setBedroom(int bedroom) {
        this.bedroom = bedroom;
    }

    public int getBathroom() {
        return bathroom;
    }

    public void setBathroom(int bathroom) {
        this.bathroom = bathroom;
    }

    public int getKitchen() {
        return kitchen;
    }

    public void setKitchen(int kitchen) {
        this.kitchen = kitchen;
    }

    public int getBackyard() {
        return backyard;
    }

    public void setBackyard(int backyard) {
        this.backyard = backyard;
    }

    public int getGarage() {
        return garage;
    }

    public void setGarage(int garage) {
        this.garage = garage;
    }

    public void setId(String hexString) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setId'");
    }

    public double getActualTemperature() {
        return actualTemperature;
    }

    public boolean isAwayMode() {
        return awayMode;
    }

    public void setAwayMode(boolean awayMode) {
        this.awayMode = awayMode;
    }

    public void setActualTemperature(double actualTemperature) {
        this.actualTemperature = actualTemperature;
    }

    public boolean isSpecialTemperatureCondition() {
        return specialTemperatureCondition;
    }

    public void setSpecialTemperatureCondition(boolean specialTemperatureCondition) {
        this.specialTemperatureCondition = specialTemperatureCondition;
    }

}
