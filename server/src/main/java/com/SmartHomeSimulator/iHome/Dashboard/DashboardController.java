package com.SmartHomeSimulator.iHome.Dashboard;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    // Since Dashboard is a singleton, we do not need to Autowire it,
    // we can directly get the instance.
    private final Dashboard dashboard = Dashboard.getInstance();

    @GetMapping("/dashboard")
    public String getDashboardData() {
        // Implement logic to retrieve dashboard data
        return "Dashboard Data";
    }
}
