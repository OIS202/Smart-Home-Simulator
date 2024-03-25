package com.SmartHomeSimulator.iHome.Thermostat;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ThermostatRepository extends MongoRepository<Thermostat, String> {

    
} 
