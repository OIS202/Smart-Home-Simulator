package com.SmartHomeSimulator.iHome.Dashboard;

import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final Dashboard dashboard = Dashboard.getInstance();

    public String getDashboardData() {
        // TODO Auto-generated method stub
        System.out.println("hello");
        throw new UnsupportedOperationException("Unimplemented method 'getDashboardData'");
    }

    // Implement any service methods that interact with the Dashboard instance
}
