package com.Thermostat;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.SmartHomeSimulator.iHome.Thermostat.Thermostat;
import com.SmartHomeSimulator.iHome.Thermostat.ThermostatRepository;
import com.SmartHomeSimulator.iHome.Thermostat.ThermostatService;

public class ThermostatServiceTest {

    @Mock
    private ThermostatRepository thermostatRepository;

    @InjectMocks
    private ThermostatService thermostatService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateThermostatWithValidInput() {
        // Arrange
        Map<String, Integer> temperatureMap = new HashMap<>();
        temperatureMap.put("10:00", 20);
        temperatureMap.put("11:00", 22);

        Thermostat mockThermostat = new Thermostat();
        mockThermostat.setTime(List.of("10:00", "11:00"));
        mockThermostat.setOutsideTemperature(List.of(20, 22));

        when(thermostatRepository.save(any(Thermostat.class))).thenReturn(mockThermostat);

        // Act
        Thermostat createdThermostat = thermostatService.createThermostat(temperatureMap);

        // Assert
        assertEquals(List.of("10:00", "11:00"), createdThermostat.getTime());
        assertEquals(List.of(20, 22), createdThermostat.getOutsideTemperature());
    }

    @Test
    public void testCreateThermostatWithEmptyMap() {
        // Arrange
        Map<String, Integer> emptyMap = new HashMap<>();
        Thermostat mockThermostat = new Thermostat();

        when(thermostatRepository.save(any(Thermostat.class))).thenReturn(mockThermostat);

        // Act
        Thermostat createdThermostat = thermostatService.createThermostat(emptyMap);

        // Assert
        assertTrue(createdThermostat.getTime().isEmpty());
        assertTrue(createdThermostat.getOutsideTemperature().isEmpty());
    }

    @Test
    public void testCreateThermostatWithUnorderedTimes() {
        // Arrange
        Map<String, Integer> temperatureMap = new HashMap<>();
        temperatureMap.put("11:00", 22);
        temperatureMap.put("10:00", 20);

        Thermostat mockThermostat = new Thermostat();
        mockThermostat.setTime(List.of("10:00", "11:00")); // Expected order
        mockThermostat.setOutsideTemperature(List.of(20, 22)); // Corresponding temps

        when(thermostatRepository.save(any(Thermostat.class))).thenReturn(mockThermostat);

        // Act
        Thermostat createdThermostat = thermostatService.createThermostat(temperatureMap);

        // Assert
        assertEquals(List.of("10:00", "11:00"), createdThermostat.getTime());
    }

    @Test
    public void testCreateThermostatWithUnorderedTemperatures() {
        // Arrange
        Map<String, Integer> temperatureMap = new HashMap<>();
        temperatureMap.put("10:00", 22); // Higher temp earlier
        temperatureMap.put("11:00", 20); // Lower temp later

        Thermostat mockThermostat = new Thermostat();
        mockThermostat.setTime(List.of("10:00", "11:00")); // Times in input order
        mockThermostat.setOutsideTemperature(List.of(20, 22)); // Expected sorted order

        when(thermostatRepository.save(any(Thermostat.class))).thenReturn(mockThermostat);

        // Act
        Thermostat createdThermostat = thermostatService.createThermostat(temperatureMap);

        // Assert
        assertEquals(List.of(20, 22), createdThermostat.getOutsideTemperature()); // Verify temps are sorted
    }
}
