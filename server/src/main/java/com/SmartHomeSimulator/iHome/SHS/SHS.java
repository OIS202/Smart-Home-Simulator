package com.SmartHomeSimulator.iHome.SHS;
import com.SmartHomeSimulator.iHome.User.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;
import java.util.List;


public class SHS {

    @Id
    private List<User> users;
    private String date;
    private String time;

    public SHS() {}

    public SHS(List<User> users, String date, String time ) {
        this.users = users;
        this.date = date;
        this.time = time;
    }

    public List<User> getUsers() {return users;}
    public String getDate() { return date;}
    public String getTime() {return time;}

    public void setUsers(List<User> users) {this.users = users;}
    public void setDate(String date) {this.date = date;}
    public void setTime(String time) {this.time = time;}

}