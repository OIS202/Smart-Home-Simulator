package com.SmartHomeSimulator.iHome.Rooms;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SmartHomeSimulator.iHome.Zone.Zone;
import com.SmartHomeSimulator.iHome.Zone.ZoneRepository;

@Service
public class RoomService {

    private final RoomRepository roomRepository;
    private final ZoneRepository zoneRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository, ZoneRepository zoneRepository) {
        this.roomRepository = roomRepository;
        this.zoneRepository = zoneRepository;
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

    // RoomService.java modification
    public boolean assignRoomToZoneByName(String roomName, String zoneName) {
        Optional<Room> roomOpt = roomRepository.findByName(roomName);
        Optional<Zone> zoneOpt = zoneRepository.findByName(zoneName);

        if (roomOpt.isPresent() && zoneOpt.isPresent() && roomOpt.get().getZoneId() == null) {
            Room room = roomOpt.get();
            Zone zone = zoneOpt.get();
            room.setZoneId(zone.getId());
            roomRepository.save(room);
            return true;
        }
        return false;
    }

    public List<Room> findUnassignedRooms() {
        return roomRepository.findByZoneIdIsNull();
    }

}
