package com.SmartHomeSimulator.iHome.devices;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
    
public interface DeviceRepository extends MongoRepository<Device, String> {
    Optional<Device> findByName(String name);
    boolean existsByName(String name);
}
