package com.SmartHomeSimulator.iHome.Dashboard;

import com.SmartHomeSimulator.iHome.Observer;
import com.SmartHomeSimulator.iHome.Modules.SmartHomeSimulator;

public class Dashboard {

    private static Dashboard instance;
    private static SmartHomeSimulator shs;

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

    public void display(Observer o) {
        System.out.println("Here is the details of the module: " + o);
    }

    public void updateSHS(SmartHomeSimulator shs) {
        Dashboard.shs = shs; // Store or update SmartHomeSimulator instance
        System.out.println("The shs " + shs + " has been updated");
    }

    public static void setInstance(Dashboard dashboard) {
        instance = dashboard; // Allow setting a mock or specific instance for testing
    }

    public String getData() {
        // Implement logic to retrieve dashboard data
        return "Actual Dashboard Data"; // Placeholder return statement
    }
}
