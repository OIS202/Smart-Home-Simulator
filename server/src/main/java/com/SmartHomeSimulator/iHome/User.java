package com.SmartHomeSimulator.iHome;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("user")
public class User {
    
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String password;

    public User(String fn, String ln, String email, String pn, String pwd) {
        super();
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.phoneNumber = pn;
        this.password = pwd;
    }
}
