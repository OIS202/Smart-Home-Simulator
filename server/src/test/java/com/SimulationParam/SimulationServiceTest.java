package com.SimulationParam;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import com.SmartHomeSimulator.iHome.SimulationParams.Simulation;
import com.SmartHomeSimulator.iHome.SimulationParams.SimulationRepository;
import com.SmartHomeSimulator.iHome.SimulationParams.SimulationService;
import com.SmartHomeSimulator.iHome.Thermostat.ThermostatService;
import com.SmartHomeSimulator.iHome.User.User;

import java.sql.Date;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mock.web.MockMultipartFile;

@ExtendWith(MockitoExtension.class)
public class SimulationServiceTest {

    @Mock
    private SimulationRepository simulationRepository;

    @Mock
    private ThermostatService thermostatService;

    @InjectMocks
    private SimulationService simulationService;

    @Captor
    private ArgumentCaptor<Map<String, Integer>> temperatureMapCaptor;

    @Test
    public void registerSimulation_ShouldSaveSimulation() {
        ObjectId houseId = new ObjectId();
        Simulation expectedSimulation = new Simulation(List.of(new User()), new Date(System.currentTimeMillis()),
                LocalTime.now(), houseId);
        when(simulationRepository.save(any(Simulation.class))).thenReturn(expectedSimulation);

        Simulation result = simulationService.registerSimulation(List.of(new User()),
                new Date(System.currentTimeMillis()), LocalTime.now(), houseId);

        assertNotNull(result);
        assertEquals(houseId, result.getHouseId());
    }

    @Test
    public void getSimulationTimeByHouseId_ShouldReturnCurrentTime() {
        LocalTime result = simulationService.getSimulationTimeByHouseId(new ObjectId());

        assertNotNull(result);
    }
}
