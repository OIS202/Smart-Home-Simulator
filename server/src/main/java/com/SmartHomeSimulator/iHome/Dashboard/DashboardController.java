package com.SmartHomeSimulator.iHome.Dashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    @Autowired
    private DashboardService dashboardService; // Use DashboardService to fetch data

    @GetMapping("/dashboard")
    public String getDashboardData() {
        // Use DashboardService to get data
        return dashboardService.getDashboardData();
    }
}
