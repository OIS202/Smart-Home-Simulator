package com.SmartHomeSimulator.iHome.House;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.SmartHomeSimulator.iHome.Rooms.Room;
import com.SmartHomeSimulator.iHome.Rooms.RoomRepository;
import com.SmartHomeSimulator.iHome.Rooms.RoomService;
import com.SmartHomeSimulator.iHome.SimulationParams.SimulationService;

import java.sql.Date;
import java.time.Instant;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class HouseServiceTest {

    @Mock
    private RoomRepository roomRepository;

    @Captor
    private ArgumentCaptor<House> houseArgumentCaptor;

    @Captor
    private ArgumentCaptor<Room> roomArgumentCaptor;

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

    @Test
    void updateHouseTemperatureAndCheckSpecialConditions_ShouldUpdateRoomAndHouseTemperature() {
        ObjectId roomId = new ObjectId();
        ObjectId houseId = new ObjectId();
        Room room = new Room(); // Assuming Room class has setters for setting properties
        room.setId(roomId);
        room.setHouseId(houseId);
        room.setActualTemp(20.0);
        room.setLastUpdateTimestamp(Instant.now().minusSeconds(3600)); // 1 hour ago
        double newTemperature = 150.0; // A significant increase for special condition
        Instant updateTimestamp = Instant.now();

        when(roomRepository.findById(roomId)).thenReturn(Optional.of(room));
        when(roomRepository.findByHouseId(houseId)).thenReturn(List.of(room));
        when(houseRepository.findById(houseId)).thenReturn(Optional.of(new House()));

        houseService.updateHouseTemperatureAndCheckSpecialConditions(roomId, newTemperature, updateTimestamp);

        // Capture and assert the updated room temperature and timestamp
        verify(roomRepository).save(roomArgumentCaptor.capture());
        Room updatedRoom = roomArgumentCaptor.getValue();
        assertEquals(newTemperature, updatedRoom.getActualTemp());
        assertEquals(updateTimestamp, updatedRoom.getLastUpdateTimestamp());

        // Assert the house's updated state after both save operations
        verify(houseRepository, times(2)).save(houseArgumentCaptor.capture());
        List<House> savedHouses = houseArgumentCaptor.getAllValues();

        // Assuming you want to check the state after the first and second save
        // operation
        // Depending on what changes are expected after each operation, assert those
        // changes here
        // For simplicity, this just shows how to access these houses:
        House houseAfterFirstSave = savedHouses.get(0); // The state of the house after the first save operation
        House houseAfterSecondSave = savedHouses.get(1); // The state of the house after the second save operation

        // Example assertion: just ensuring the houses are captured. Adjust assertions
        // based on actual logic
        assertNotNull(houseAfterFirstSave);
        assertNotNull(houseAfterSecondSave);
    }

    @Test
    void checkAndHandleSpecialTemperatureConditions_ShouldSetSpecialConditionWhenCriteriaMet() {
        ObjectId houseId = new ObjectId();
        double oldTemperature = 20.0;
        double newTemperature = 155.0; // A significant increase, triggering a special condition
        Instant lastUpdateTimestamp = Instant.now().minusSeconds(30);
        Instant updateTimestamp = Instant.now();

        House house = new House();
        when(houseRepository.findById(houseId)).thenReturn(Optional.of(house));

        houseService.checkAndHandleSpecialTemperatureConditions(houseId, oldTemperature, newTemperature,
                lastUpdateTimestamp, updateTimestamp);

        assertTrue(house.isSpecialTemperatureCondition());
        verify(houseRepository).save(house);
    }

    @Test
    void turnOffAwayMode_ShouldSetAwayModeToFalse() {
        ObjectId houseId = new ObjectId();
        House house = new House();
        house.setId(houseId);
        house.setAwayMode(true);

        when(houseRepository.findById(houseId)).thenReturn(Optional.of(house));
        doAnswer(invocation -> {
            House savedHouse = invocation.getArgument(0);
            assertFalse(savedHouse.isAwayMode());
            return null;
        }).when(houseRepository).save(any(House.class));

        houseService.turnOffAwayMode(houseId);

        verify(houseRepository).save(house);
    }

    @Test
    void findById_ShouldReturnHouseIfExists() {
        ObjectId houseId = new ObjectId();
        House expectedHouse = new House();
        expectedHouse.setId(houseId);

        when(houseRepository.findById(houseId)).thenReturn(Optional.of(expectedHouse));

        House resultHouse = houseService.findById(houseId);

        assertNotNull(resultHouse);
        assertEquals(houseId, resultHouse.getId());
    }

    @Test
    void isAwayModeOn_ShouldReturnTrueWhenAwayModeIsActive() {
        ObjectId houseId = new ObjectId();
        House house = new House();
        house.setId(houseId);
        house.setAwayMode(true);

        when(houseRepository.findById(houseId)).thenReturn(Optional.of(house));

        assertTrue(houseService.isAwayModeOn(houseId));
    }

    @Test
    void isAwayModeOn_ShouldReturnFalseWhenAwayModeIsInactive() {
        ObjectId houseId = new ObjectId();
        House house = new House();
        house.setId(houseId);
        house.setAwayMode(false);

        when(houseRepository.findById(houseId)).thenReturn(Optional.of(house));

        assertFalse(houseService.isAwayModeOn(houseId));
    }

}
