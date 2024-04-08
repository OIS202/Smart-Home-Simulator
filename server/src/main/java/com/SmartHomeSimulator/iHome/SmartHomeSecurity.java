package com.SmartHomeSimulator.iHome;

public class SmartHomeSecurity implements Subject {

    @Override
    public void subscribe(Observer observer) {
        System.out.println("SHH subscribed to SHP");
    }

    @Override
    public void unsubscribe(Observer observer) {
        System.out.println("SHH unsubscribed from SHP");
    }

    @Override
    public void notifyObservers() {
        System.out.println("SHH notfies SHP");
    }
    
}
