package com.SmartHomeSimulator.iHome.Thermostat;

import com.SmartHomeSimulator.iHome.House.House;
import com.SmartHomeSimulator.iHome.House.HouseRepository;
import com.SmartHomeSimulator.iHome.User.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Collections;
import org.slf4j.Logger;// importation for the logger 
import org.slf4j.LoggerFactory;

@Service
public class ThermostatService {
     private static final Logger logger = LoggerFactory.getLogger(ThermostatService.class);

    @Autowired
    private ThermostatRepository thermostatRepository;
    
    public Thermostat createThermostat(Map<String, Integer> temperatureMap) {
        // String date = "some date";
        // List<String> times = new ArrayList<>();
        // List<Integer> outsideTemperatures = new ArrayList<>();

        Thermostat thermostat = new Thermostat();

        List<String> container1 = new ArrayList<>();
        for (String time: temperatureMap.keySet()) {
            container1.add(time);
        }
        Collections.sort(container1);
        logger.info("list of times: ", container1);

        List<Integer> container2 = new ArrayList<>();
        for (Integer temp : temperatureMap.values()) {
            container2.add(temp);
        }
        Collections.sort(container2);
        logger.info("list of temps: ", container1);


        thermostat.setDate(null);
        thermostat.setTime(container1);
        thermostat.setOutsideTemperature(container2);
        return thermostatRepository.save(thermostat);
    }
}
