package com.SmartHomeSimulator.iHome.House;

import com.SmartHomeSimulator.iHome.House.House;
import com.SmartHomeSimulator.iHome.House.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Map;

@Service
public class HouseService {

    @Autowired
    private HouseRepository houseRepository;

    public House createHouse(Map<String, Integer> roomCounts) {
        House house = new House();
        house.setLivingRoom(roomCounts.getOrDefault("livingroom", 0));
        house.setBedroom(roomCounts.getOrDefault("bedroom", 0));
        house.setBathroom(roomCounts.getOrDefault("bathroom", 0));
        house.setKitchen(roomCounts.getOrDefault("kitchen", 0));
        house.setBackyard(roomCounts.getOrDefault("backyard", 0));
        house.setGarage(roomCounts.getOrDefault("garage", 0));

        return houseRepository.save(house);
    }
}
