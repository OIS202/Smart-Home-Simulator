package com.SmartHomeSimulator.iHome.SimulationParams;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;// importation for the logger 
import org.slf4j.LoggerFactory;
import java.util.TreeMap;

import com.SmartHomeSimulator.iHome.User.User;
import com.SmartHomeSimulator.iHome.User.UserService;

@RestController
public class SimulationController {
    private static final Logger logger = LoggerFactory.getLogger(SimulationController.class);

    @Autowired
    private SimulationRepository shsRepository;

    @Autowired
    private SimulationService shsService;

    
    @PostMapping("/startsimulation")
    public Simulation startSimulation(@RequestBody Simulation shs) {
        Simulation newSimulation = null;
        try {
            newSimulation = shsService.registerSimulation(shs.getUsers(), shs.getDate(), shs.getTime());
            return newSimulation;
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        return newSimulation;
    }

    @PostMapping("/readtemperatures")
    public Map<String, Integer> mapTemperature(@RequestParam("file") MultipartFile file) {
        Map<String, Integer> temperatureMap = new TreeMap<>();
        try {
            logger.info("reached try block");
            temperatureMap = shsService.readTemperatures(file);
            return temperatureMap;
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        return temperatureMap;
    }
    
}