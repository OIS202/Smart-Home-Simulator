package com.SmartHomeSimulator.iHome.Thermostat;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

public class Thermostat {

    @Id
    private ObjectId id;
    private String date;
    private List<String> times;
    private List<Integer> outsideTemperatures;

    public Thermostat() {
        this.date = "";
        this.times = new ArrayList<>();
        this.outsideTemperatures = new ArrayList<>();
    }

    public Thermostat(String date, List<String> times, List<Integer> outsideTemperatures) {
        this.date = date;
        this.times = times;
        this.outsideTemperatures = outsideTemperatures;
    }

    public ObjectId getId() {
        return id;
    }
    
    public String getDate() {
        return date;
    }
    
    public List<String> getTime() {
        return times;
    }
    
    public List<Integer> getOutsideTemperature() {
        return outsideTemperatures;
    }
    
    public void setId(ObjectId id) {
        this.id = id;
    }
    
    public void setDate(String date) {
        this.date = date;
    }
    
    public void setTime(List<String> time) {
        this.times = time;
    }
    
    public void setOutsideTemperature(List<Integer> outsideTemperature) {
        this.outsideTemperatures = outsideTemperature;
    }
    
    
}
