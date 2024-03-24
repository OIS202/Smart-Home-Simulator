package com.SmartHomeSimulator.iHome.SimulationParams;
import com.SmartHomeSimulator.iHome.User.User;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;
import java.util.List;
import java.sql.Date;
import java.sql.Time;


public class Simulation {

    @Id
    private ObjectId id;
    private List<User> users;
    private Date date;
    private Time time;

    public Simulation() {}

    public Simulation(List<User> users, Date date, Time time ) {
        this.users = users;
        this.date = date;
        this.time = time;
    }
    
    public ObjectId getId() {return id;}
    public List<User> getUsers() {return users;}
    public Date getDate() { return date;}
    public Time getTime() {return time;}

    public void setUsers(List<User> users) {this.users = users;}
    public void setDate(Date date) {this.date = date;}
    public void setTime(Time time) {this.time = time;}

}