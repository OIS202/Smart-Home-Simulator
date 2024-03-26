package com.SmartHomeSimulator.iHome.Dashboard;

import com.SmartHomeSimulator.iHome.Observer;
import com.SmartHomeSimulator.iHome.Modules.SmartHomeModules;
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
        System.out.println("The shs " + shs + " has been updated");
    }
    // Dashboard related methods

    public static void setInstance(Dashboard dashboard) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setInstance'");
    }

    public Object getData() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getData'");
    }
}
