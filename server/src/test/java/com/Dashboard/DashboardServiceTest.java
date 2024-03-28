package com.Dashboard;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.SmartHomeSimulator.iHome.Dashboard.Dashboard;
import com.SmartHomeSimulator.iHome.Dashboard.DashboardService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class DashboardServiceTest {

    private DashboardService dashboardService;
    private Dashboard dashboard;

    @BeforeEach
    void setUp() {
        // Creating a mock Dashboard instance for testing
        dashboard = mock(Dashboard.class);
        // Setting the mock instance to the Dashboard class (using the newly implemented
        // setInstance method)
        Dashboard.setInstance(dashboard);
        // Initializing the DashboardService with the mock Dashboard
        dashboardService = new DashboardService();
    }

    @Test
    void testGetDashboardData() {
        // Setting up the mock to return a specific string when getData is called
        when(dashboard.getData()).thenReturn("Mocked Dashboard Data");

        // Calling the method under test
        String data = dashboardService.getDashboardData();

        // Verifying the returned data
        assertNotNull(data, "Data should not be null");
        assertEquals("Mocked Dashboard Data", data, "Data should match the mocked response");
    }
}
