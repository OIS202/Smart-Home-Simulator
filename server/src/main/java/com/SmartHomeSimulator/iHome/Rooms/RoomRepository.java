package com.SmartHomeSimulator.iHome.Rooms;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface RoomRepository extends MongoRepository<Room, ObjectId> {
    List<Room> findByHouseIdAndZoneIdIsNull(ObjectId houseId);

    List<Room> findByZoneId(ObjectId zoneId);

    Optional<Room> findByName(String name);

    List<Room> findByHouseId(ObjectId houseId);

}
