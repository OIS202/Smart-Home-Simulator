package com.SmartHomeSimulator.iHome.Rooms;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    /**
     * Creates a new room and saves it to the database.
     * 
     * @param name        The name of the room.
     * @param actualTemp  The actual temperature of the room.
     * @param desiredTemp The desired temperature of the room.
     * @param houseId     The ID of the house the room belongs to.
     * @param zoneId      The ID of the zone the room is part of.
     * @return The newly created room.
     */
    public Room createRoom(String name, double actualTemp, double desiredTemp, ObjectId houseId, ObjectId zoneId) {
        Room newRoom = new Room(name, actualTemp, desiredTemp, houseId, zoneId);

        return roomRepository.save(newRoom);
    }
}
