package com.SmartHomeSimulator.iHome.devices;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface DeviceRepository extends MongoRepository<Device, ObjectId> {
    Optional<Device> findByName(String name);

    boolean existsByName(String name);

    List<Device> findByType(String type);

    List<Device> findByRoomId(ObjectId roomId);

    List<Device> findByHouseId(ObjectId houseId);
}
