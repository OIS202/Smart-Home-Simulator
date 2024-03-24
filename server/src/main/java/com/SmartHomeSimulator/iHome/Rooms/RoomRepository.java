package com.SmartHomeSimulator.iHome.Rooms;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository<Room, ObjectId> {
    // You can add custom database query methods here if needed
}
