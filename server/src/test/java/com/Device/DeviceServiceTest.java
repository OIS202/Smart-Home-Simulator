package com.Device;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.List;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.SmartHomeSimulator.iHome.House.HouseService;
import com.SmartHomeSimulator.iHome.devices.Device;
import com.SmartHomeSimulator.iHome.devices.DeviceRepository;
import com.SmartHomeSimulator.iHome.devices.DeviceService;

public class DeviceServiceTest {

    @Mock
    private DeviceRepository deviceRepository;

    @InjectMocks
    private DeviceService deviceService;

    @Mock
    private HouseService houseService;

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

    @Test
    public void getDevicesByType_ShouldReturnDevicesOfSpecifiedType() {
        // Arrange
        List<Device> expectedDevices = List.of(new Device("Light", "Living Room", "Lamp"));
        when(deviceRepository.findByType("Light")).thenReturn(expectedDevices);

        // Act
        List<Device> resultDevices = deviceService.getDevicesByType("Light");

        // Assert
        assertFalse(resultDevices.isEmpty());
        assertEquals("Light", resultDevices.get(0).getType());
    }

    @Test
    public void getDevicesByRoomId_ShouldReturnDevicesInSpecifiedRoom() {
        // Arrange
        ObjectId roomId = new ObjectId();
        Device expectedDevice = new Device("Thermostat", "Living Room", "Thermo");
        expectedDevice.setRoomId(roomId); // Correctly set roomId for the device
        List<Device> expectedDevices = List.of(expectedDevice);
        when(deviceRepository.findByRoomId(roomId)).thenReturn(expectedDevices);

        // Act
        List<Device> resultDevices = deviceService.getDevicesByRoomId(roomId);

        // Assert
        assertFalse(resultDevices.isEmpty());
        assertEquals(roomId, resultDevices.get(0).getRoomId());
    }
    @Test
    public void getDevicesByHouseId_ShouldReturnDevicesInSpecifiedHouse() {
        // Arrange
        ObjectId houseId = new ObjectId();
        Device expectedDevice = new Device("Camera", "Entrance", "Cam1");
        expectedDevice.setHouseId(houseId); // Correctly set houseId for the device
        List<Device> expectedDevices = List.of(expectedDevice);
        when(deviceRepository.findByHouseId(houseId)).thenReturn(expectedDevices);

        // Act
        List<Device> resultDevices = deviceService.getDevicesByHouseId(houseId);

        // Assert
        assertFalse(resultDevices.isEmpty());
        assertEquals(houseId, resultDevices.get(0).getHouseId());
    }
  

    @Test
    public void updateDoorAndWindowStatus_ShouldCloseDoorsAndWindowsWhenAwayModeOn() {
        // Arrange
        ObjectId houseId = new ObjectId();
        List<Device> doorsAndWindows = List.of(
                new Device("Door", "Front", "Front Door"),
                new Device("Window", "Living Room", "Living Room Window"));
        when(deviceRepository.findByHouseIdAndTypeIn(eq(houseId), anyList())).thenReturn(doorsAndWindows);
        when(houseService.isAwayModeOn(houseId)).thenReturn(true);

        // Act
        deviceService.updateDoorAndWindowStatus(houseId);

        // Assert
        for (Device device : doorsAndWindows) {
            verify(deviceRepository).save(device);
            assertFalse(device.getIsOn());
        }
    }

}
