package com.SmartHomeSimulator.iHome.House;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.SmartHomeSimulator.iHome.Rooms.RoomService;
import com.SmartHomeSimulator.iHome.SimulationParams.SimulationService;

import java.sql.Date;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class HouseServiceTest {

    @Mock
    private HouseRepository houseRepository;

    @Mock
    private RoomService roomService;

    @Mock
    private SimulationService simulationService;

    @InjectMocks
    private HouseService houseService;

    private Map<String, Integer> roomCounts;
    private ObjectId mockId;

    @BeforeEach
    void setUp() {
        roomCounts = new HashMap<>();
        roomCounts.put("livingroom", 1);
        roomCounts.put("bedroom", 2);
        roomCounts.put("bathroom", 1);
        roomCounts.put("kitchen", 1);
        roomCounts.put("backyard", 1);
        roomCounts.put("garage", 1);

        mockId = new ObjectId(); // Prepare a mock ObjectId for house ID.
    }

    @Test
    void createHouse_ShouldSaveHouseWithCorrectRoomCounts() {
        House expectedHouse = new House();
        expectedHouse.setId(mockId); // Use the prepared mock ObjectId.

        when(houseRepository.save(any(House.class))).thenReturn(expectedHouse);

        House createdHouse = houseService.createHouse(roomCounts);

        assertNotNull(createdHouse);
        verify(houseRepository).save(any(House.class));

        // Assuming registerSimulation does not return a value. Adjust as needed.
        verify(simulationService).registerSimulation(isNull(), any(Date.class), any(LocalTime.class),
                any(ObjectId.class));

        // Verify the interactions with roomService.createRoom for each room type and
        // count
        verify(roomService).createRoom(matches("Living Room \\d+"), eq(20.0), eq(22.0), eq(mockId), isNull());
        verify(roomService, times(2)).createRoom(matches("Bedroom \\d+"), eq(20.0), eq(22.0), eq(mockId), isNull());
        verify(roomService).createRoom(matches("Bathroom \\d+"), eq(20.0), eq(22.0), eq(mockId), isNull());
        verify(roomService).createRoom(matches("Kitchen \\d+"), eq(20.0), eq(22.0), eq(mockId), isNull());
        verify(roomService).createRoom(matches("Backyard \\d+"), eq(20.0), eq(22.0), eq(mockId), isNull());
        verify(roomService).createRoom(matches("Garage \\d+"), eq(20.0), eq(22.0), eq(mockId), isNull());
    }

    @Test
    void createHouse_ShouldHandleEmptyRoomCounts() {
        House expectedHouse = new House();
        expectedHouse.setId(mockId); // Use the prepared mock ObjectId.

        Map<String, Integer> emptyRoomCounts = new HashMap<>();

        when(houseRepository.save(any(House.class))).thenReturn(expectedHouse);

        House createdHouse = houseService.createHouse(emptyRoomCounts);

        assertNotNull(createdHouse);
        verify(houseRepository).save(any(House.class));

        // Assuming registerSimulation does not return a value. Adjust as needed.
        verify(simulationService).registerSimulation(isNull(), any(Date.class), any(LocalTime.class),
                any(ObjectId.class));

        // Since there are no room counts, no rooms should be created.
        verify(roomService, never()).createRoom(anyString(), anyDouble(), anyDouble(), any(ObjectId.class), any());
    }
}
