package com.SmartHomeSimulator.iHome.Dashboard;

import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final Dashboard dashboard = Dashboard.getInstance();

    public String getDashboardData() {
        // Implementation to return dashboard data
        return dashboard.getData(); // Call Dashboard's getData() method
    }

    // Other service methods interacting with the Dashboard instance
}
