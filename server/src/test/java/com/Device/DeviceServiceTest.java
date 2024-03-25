package com.Device;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.SmartHomeSimulator.iHome.devices.Device;
import com.SmartHomeSimulator.iHome.devices.DeviceRepository;
import com.SmartHomeSimulator.iHome.devices.DeviceService;

public class DeviceServiceTest {

    @Mock
    private DeviceRepository deviceRepository;

    @InjectMocks
    private DeviceService deviceService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testRegisterDevice_NewDevice() throws Exception {
        // Arrange
        when(deviceRepository.existsByName(anyString())).thenReturn(false);
        Device mockDevice = new Device("type", "location", "name");
        when(deviceRepository.save(any(Device.class))).thenReturn(mockDevice);

        // Act
        Device registeredDevice = deviceService.registerDevice("type", "location", "name");

        // Assert
        assertNotNull(registeredDevice);
        assertEquals("name", registeredDevice.getName());
    }

    @Test
    public void testRegisterDevice_ExistingDevice() {
        // Arrange
        when(deviceRepository.existsByName(anyString())).thenReturn(true);

        // Act & Assert
        assertThrows(Exception.class, () -> {
            deviceService.registerDevice("type", "location", "existingName");
        });
    }
}
