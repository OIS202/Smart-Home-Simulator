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
        // Assuming Dashboard has a public method to set the mocked instance for testing
        // purposes
        dashboard = mock(Dashboard.class);
        Dashboard.setInstance(dashboard); // This assumes a static method in Dashboard to set a mock instance
        dashboardService = new DashboardService();
    }

    @Test
    void testGetDashboardData() {
        // Assuming the Dashboard class has a method getData() that returns a String
        when(dashboard.getData()).thenReturn("Mocked Dashboard Data");

        String data = dashboardService.getDashboardData(); // This method needs to be implemented in DashboardService

        assertNotNull(data, "Data should not be null");
        assertEquals("Mocked Dashboard Data", data, "Data should match the mocked response");
    }
}
