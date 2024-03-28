package com.SmartHomeSimulator.iHome.User;

import java.util.Date;

public class UserResponseDto {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String location;
    private String houseId;

    // Constructor that takes a User object and initializes DTO fields
    public UserResponseDto(User user) {
        this.id = user.getId().toHexString();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.phoneNumber = user.getPhoneNumber();
        this.houseId = user.getHouseId().toHexString();
        this.location = user.getLocation();
    }

    // Getters
    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getHouseId() {
        return houseId;
    }

    public String getLocation() {
        return location;
    }

    // Setters
    public void setId(String id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setHouseId(String houseId) {
        this.houseId = houseId;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    // toString method for logging or debugging purposes
    @Override
    public String toString() {
        return "UserResponseDto{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", houseId='" + houseId + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
