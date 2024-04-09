package com.SmartHomeSimulator.iHome.Rooms;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.SmartHomeSimulator.iHome.House.House;
import com.SmartHomeSimulator.iHome.House.HouseService;
import com.SmartHomeSimulator.iHome.Zone.Zone;
import com.SmartHomeSimulator.iHome.Zone.ZoneRepository;

@Service
public class RoomService {

    private final RoomRepository roomRepository;
    private final ZoneRepository zoneRepository;
    @Autowired
    private HouseService houseService;

    @Autowired
    public RoomService(RoomRepository roomRepository, ZoneRepository zoneRepository) {
        this.roomRepository = roomRepository;
        this.zoneRepository = zoneRepository;
    }

    private static final Logger logger = LoggerFactory.getLogger(RoomService.class);

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
    public boolean assignRoomToZone(ObjectId roomId, ObjectId zoneId) {
        Optional<Room> roomOpt = roomRepository.findById(roomId);
        Optional<Zone> zoneOpt = zoneRepository.findById(zoneId);

        if (roomOpt.isPresent() && zoneOpt.isPresent()) {
            Room room = roomOpt.get();
            Zone zone = zoneOpt.get();

            // Validate that the room and zone have matching house IDs before linking
            if (room.getHouseId() != null && room.getHouseId().equals(zone.getHouseId())) {
                room.setZoneId(zoneId);
                roomRepository.save(room);
                return true;
            }
        }
        return false; // Room or zone not found, or house IDs do not match
    }

    public List<Room> getRoomsByZoneId(ObjectId zoneId) {
        return roomRepository.findByZoneId(zoneId);
    }

    public List<Room> getRoomsByHouseId(ObjectId houseId) {
        return roomRepository.findByHouseId(houseId);
    }

    public List<Room> getUnassignedRoomsByHouseId(ObjectId houseId) {
        return roomRepository.findByHouseIdAndZoneIdIsNull(houseId);
    }

    public void updateRoomTemperature(ObjectId roomId, double newTemperature, Instant updateTimestamp) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));
        double oldTemperature = room.getActualTemp();
        Instant lastUpdateTimestamp = room.getLastUpdateTimestamp();

        room.setActualTemp(newTemperature);
        room.setLastUpdateTimestamp(updateTimestamp);
        roomRepository.save(room);

        logger.info("Updated temperature for Room ID: {}, New Temperature: {}", roomId.toHexString(), newTemperature);

        // Update the house's actual temperature
        houseService.updateHouseActualTemperature(room.getHouseId());

        // Special conditions check
        checkAndHandleSpecialTemperatureConditions(room.getHouseId(), oldTemperature, newTemperature,
                lastUpdateTimestamp, updateTimestamp);
    }

    private void checkAndHandleSpecialTemperatureConditions(ObjectId houseId, double oldTemperature,
            double newTemperature, Instant lastUpdateTimestamp, Instant updateTimestamp) {

        if (newTemperature >= 135
                || (newTemperature - oldTemperature >= 15 && withinOneMinute(lastUpdateTimestamp, updateTimestamp))) {
            houseService.turnOffAwayMode(houseId);
            logger.warn("Turning off away mode due to temperature condition for House ID: {}", houseId.toHexString());
        }
    }

    private boolean withinOneMinute(Instant lastUpdateTimestamp, Instant updateTimestamp) {
        return ChronoUnit.MINUTES.between(lastUpdateTimestamp, updateTimestamp) < 1;
    }

}
