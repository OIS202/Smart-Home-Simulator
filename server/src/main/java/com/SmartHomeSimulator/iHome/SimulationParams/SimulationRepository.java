package com.SmartHomeSimulator.iHome.SimulationParams;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SimulationRepository extends MongoRepository<Simulation, String> {

}