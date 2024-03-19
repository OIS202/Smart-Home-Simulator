package com.SmartHomeSimulator.iHome.SimulationParams;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;
import org.slf4j.Logger;// importation for the logger 
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.SmartHomeSimulator.iHome.User.User;
import com.SmartHomeSimulator.iHome.User.UserService;
import com.SmartHomeSimulator.iHome.Util.CsvTemperature;
import com.SmartHomeSimulator.iHome.Thermostat.Thermostat;
import com.SmartHomeSimulator.iHome.Thermostat.ThermostatService;

@Service
public class SimulationService {
    private static final Logger logger = LoggerFactory.getLogger(SimulationService.class);

    @Autowired
    private ThermostatService thermostatService;

    @Autowired
    private SimulationRepository shsRepository;

    public Simulation registerSimulation(List<User> users, Date date, LocalTime time) {
        Simulation newShs = new Simulation(users, date, time);
        return shsRepository.save(newShs);
    }

    public Map<String, Integer> readTemperatures(MultipartFile file) {
        Map<String, Integer> temperatureMap = new TreeMap<>();
        try {
            temperatureMap = CsvTemperature.readCsvToMap(file);
            logger.info("csv getting pared");
            thermostatService.createThermostat(temperatureMap);

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return temperatureMap;
    }

}