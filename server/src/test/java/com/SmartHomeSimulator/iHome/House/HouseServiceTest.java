package com.SmartHomeSimulator.iHome.House;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import com.SmartHomeSimulator.iHome.House.House;
import com.SmartHomeSimulator.iHome.House.HouseRepository;
import com.SmartHomeSimulator.iHome.House.HouseService;

import java.util.HashMap;
import java.util.Map;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class HouseServiceTest {

    @Mock
    private HouseRepository houseRepository;

    @InjectMocks
    private HouseService houseService;

    private Map<String, Integer> roomCounts;

    @BeforeEach
    void setUp() {
        // Initialize your test data
        roomCounts = new HashMap<>();
        roomCounts.put("livingroom", 1);
        roomCounts.put("bedroom", 2);
        roomCounts.put("bathroom", 1);
        roomCounts.put("kitchen", 1);
        roomCounts.put("backyard", 1);
        roomCounts.put("garage", 1);
    }

    @Test
    void createHouse_ShouldSaveHouseWithCorrectRoomCounts() {
        House expectedHouse = new House();
        expectedHouse.setLivingRoom(1);
        expectedHouse.setBedroom(2);
        expectedHouse.setBathroom(1);
        expectedHouse.setKitchen(1);
        expectedHouse.setBackyard(1);
        expectedHouse.setGarage(1);

        when(houseRepository.save(any(House.class))).thenAnswer(invocation -> invocation.getArgument(0));

        House createdHouse = houseService.createHouse(roomCounts);

        assertNotNull(createdHouse);
        assertEquals(expectedHouse.getLivingRoom(), createdHouse.getLivingRoom());
        assertEquals(expectedHouse.getBedroom(), createdHouse.getBedroom());
        assertEquals(expectedHouse.getBathroom(), createdHouse.getBathroom());
        assertEquals(expectedHouse.getKitchen(), createdHouse.getKitchen());
        assertEquals(expectedHouse.getBackyard(), createdHouse.getBackyard());
        assertEquals(expectedHouse.getGarage(), createdHouse.getGarage());

        // Verify that the houseRepository.save() method was called once
        verify(houseRepository).save(any(House.class));
    }

    @Test
    void createHouse_ShouldHandleEmptyRoomCounts() {
        // Empty roomCounts map to simulate no input
        Map<String, Integer> emptyRoomCounts = new HashMap<>();

        when(houseRepository.save(any(House.class))).thenAnswer(invocation -> invocation.getArgument(0));

        House createdHouse = houseService.createHouse(emptyRoomCounts);

        assertNotNull(createdHouse, "The created house should not be null.");
        assertEquals(0, createdHouse.getLivingRoom(), "Expected living rooms count to be 0");
        assertEquals(0, createdHouse.getBedroom(), "Expected bedrooms count to be 0");
        assertEquals(0, createdHouse.getBathroom(), "Expected bathrooms count to be 0");
        assertEquals(0, createdHouse.getKitchen(), "Expected kitchen count to be 0");
        assertEquals(0, createdHouse.getBackyard(), "Expected backyard count to be 0");
        assertEquals(0, createdHouse.getGarage(), "Expected garage count to be 0");

        // Verify that the houseRepository.save() method was called once
        verify(houseRepository).save(any(House.class));
    }

}
