package com.SmartHomeSimulator.iHome.House;

import com.SmartHomeSimulator.iHome.House.House;
import com.SmartHomeSimulator.iHome.House.HouseRepository;
import com.SmartHomeSimulator.iHome.Rooms.Room;
import com.SmartHomeSimulator.iHome.Rooms.RoomRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.SmartHomeSimulator.iHome.Rooms.RoomService;
import com.SmartHomeSimulator.iHome.SimulationParams.SimulationService;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;

@Service
public class HouseService {

    @Autowired
    private HouseRepository houseRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomService roomService;

    @Autowired
    private SimulationService simulationService;

    private static final Logger logger = LoggerFactory.getLogger(HouseService.class);

    public House createHouse(Map<String, Integer> roomCounts) {
        House house = new House();
        house.setLivingRoom(roomCounts.getOrDefault("livingroom", 0));
        house.setBedroom(roomCounts.getOrDefault("bedroom", 0));
        house.setBathroom(roomCounts.getOrDefault("bathroom", 0));
        house.setKitchen(roomCounts.getOrDefault("kitchen", 0));
        house.setBackyard(roomCounts.getOrDefault("backyard", 0));
        house.setGarage(roomCounts.getOrDefault("garage", 0));
        this.simulationService.registerSimulation(null, new Date(System.currentTimeMillis()), LocalTime.now(),
                new ObjectId("65fcdf7132513f5cebd28837"));
        House savedHouse = houseRepository.save(house);

        int livingRoomCount = house.getLivingRoom(); // Assuming getLivingRoom() returns the count of living rooms
        for (int i = 1; i <= livingRoomCount; i++) {
            // Assume createRoom takes name, actualTemp, desiredTemp, houseId, zoneId
            roomService.createRoom("Living Room " + i, 20.0, 22.0, savedHouse.getId(), null);
        }
        int bedroomRoomCount = house.getBedroom(); // Assuming getLivingRoom() returns the count of living rooms
        for (int i = 1; i <= bedroomRoomCount; i++) {
            // Assume createRoom takes name, actualTemp, desiredTemp, houseId, zoneId
            roomService.createRoom("Bedroom " + i, 20.0, 22.0, savedHouse.getId(), null);
        }
        int bathroomRoomCount = house.getBathroom(); // Assuming getLivingRoom() returns the count of living rooms
        for (int i = 1; i <= bathroomRoomCount; i++) {
            // Assume createRoom takes name, actualTemp, desiredTemp, houseId, zoneId
            roomService.createRoom("Bathroom " + i, 20.0, 22.0, savedHouse.getId(), null);
        }
        int kitchenCount = house.getKitchen(); // Assuming getLivingRoom() returns the count of living rooms
        for (int i = 1; i <= kitchenCount; i++) {
            // Assume createRoom takes name, actualTemp, desiredTemp, houseId, zoneId
            roomService.createRoom("Kitchen " + i, 20.0, 22.0, savedHouse.getId(), null);
        }
        int backyardCount = house.getBackyard(); // Assuming getLivingRoom() returns the count of living rooms
        for (int i = 1; i <= backyardCount; i++) {
            // Assume createRoom takes name, actualTemp, desiredTemp, houseId, zoneId
            roomService.createRoom("Backyard " + i, 20.0, 22.0, savedHouse.getId(), null);
        }
        int garageCount = house.getGarage(); // Assuming getLivingRoom() returns the count of living rooms
        for (int i = 1; i <= garageCount; i++) {
            // Assume createRoom takes name, actualTemp, desiredTemp, houseId, zoneId
            roomService.createRoom("Garage " + i, 20.0, 22.0, savedHouse.getId(), null);
        }

        return savedHouse;
    }

    public void updateHouseActualTemperature(ObjectId houseId) {
        List<Room> rooms = roomRepository.findByHouseId(houseId);
        double averageTemperature = rooms.stream()
                .mapToDouble(Room::getActualTemp) // Ensure this method returns double
                .average()
                .orElseThrow(() -> new IllegalArgumentException("No rooms found for the house with ID: " + houseId));

        House house = houseRepository.findById(houseId)
                .orElseThrow(() -> new RuntimeException("House not found with ID: " + houseId));
        house.setActualTemperature(averageTemperature);
        houseRepository.save(house);
    }

    public House findById(ObjectId houseId) {
        return houseRepository.findById(houseId)
                .orElseThrow(() -> new RuntimeException("House not found with ID: " + houseId));
    }

    public void turnOffAwayMode(ObjectId houseId) {
        House house = findById(houseId); // Use the corrected method
        house.setAwayMode(false);
        houseRepository.save(house);
        logEvent("Away mode turned off for house ID: " + houseId);
    }

    private void logEvent(String message) {
        logger.info(message);
    }
}
