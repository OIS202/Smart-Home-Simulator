// Concrete Subject implementation
package com.SmartHomeSimulator.iHome.Modules;

import java.util.ArrayList;
import java.util.List;

import com.SmartHomeSimulator.iHome.Subject;
import com.SmartHomeSimulator.iHome.Observer;

public class SmartHomeSimulator implements Subject {
    private List<Observer> subscribers = new ArrayList<>();
    private String state;

    @Override
    public void subscribe(Observer observer) {
        subscribers.add(observer);
    }

    @Override
    public void unsubscribe(Observer observer) {
        subscribers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : subscribers) {
            observer.update(state);
        }
    }

    // Method that changes the state of the Subject
    public void changeState(String newState) {
        this.state = newState;
        notifyObservers();
    }
}