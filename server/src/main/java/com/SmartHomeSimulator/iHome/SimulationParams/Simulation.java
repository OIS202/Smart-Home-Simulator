package com.SmartHomeSimulator.iHome.SimulationParams;
import com.SmartHomeSimulator.iHome.User.User;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;
import java.util.List;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;


public class Simulation {

    @Id
    private ObjectId id;
    private ObjectId houseId;
    private List<User> users;
    private Date date;
    private LocalTime time; 

    public Simulation() {}

    public Simulation(List<User> users, Date date, LocalTime time, ObjectId houseId) {
        this.users = users;
        this.date = date;
        this.time = time;
        this.houseId = houseId;
    }
    
    public ObjectId getId() {return id;}
    public List<User> getUsers() {return users;}
    public Date getDate() { return date;}
    public LocalTime getTime() {return time;}
    public ObjectId getHouseId(){return houseId;}

    public void setUsers(List<User> users) {this.users = users;}
    public void setDate(Date date) {this.date = date;}
    public void setTime(LocalTime time) {this.time = time;}
    public void setHouseId(String id){this.houseId = new ObjectId(id);}

}