package com.SmartHomeSimulator.iHome;

public class SmartHomeHeater implements Subject {

    @Override
    public void subscribe(Observer observer) {
        // TODO Auto-generated method stub
        System.out.println("Subscribed to smart home simulator");
    }

    @Override
    public void unsubscribe(Observer observer) {
        // TODO Auto-generated method stub
        System.out.println("Unsubscribed to smart home simulator");
    }

    @Override
    public void notifyObservers() {
        // TODO Auto-generated method stub
        System.out.println("Notified the observers");
    }
    
}
