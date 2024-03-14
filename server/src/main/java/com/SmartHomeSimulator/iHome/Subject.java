package com.SmartHomeSimulator.iHome;

// The Subject interface
public interface Subject {
    void subscribe(Observer observer);
    void unsubscribe(Observer observer);
    void notifyObservers();
}