package com.SmartHomeSimulator.iHome.House;

import com.SmartHomeSimulator.iHome.House.House;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HouseRepository extends MongoRepository<House, String> {
    // Custom query methods can be defined here if needed
}
