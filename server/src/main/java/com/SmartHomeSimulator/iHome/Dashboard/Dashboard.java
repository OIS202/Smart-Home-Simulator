package com.SmartHomeSimulator.iHome.Dashboard;

public class Dashboard {

    private static Dashboard instance;

    private Dashboard() {
        // Initialize any resources Dashboard needs
    }

    public static Dashboard getInstance() {
        if (instance == null) {
            synchronized (Dashboard.class) {
                if (instance == null) {
                    instance = new Dashboard();
                }
            }
        }
        return instance;
    }

    // Dashboard related methods
}
