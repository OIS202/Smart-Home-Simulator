package com.SmartHomeSimulator.iHome.Room;

import com.SmartHomeSimulator.iHome.Rooms.Room;
import com.SmartHomeSimulator.iHome.Rooms.RoomRepository;
import com.SmartHomeSimulator.iHome.Rooms.RoomService;
import com.SmartHomeSimulator.iHome.Zone.Zone;
import com.SmartHomeSimulator.iHome.Zone.ZoneRepository;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class RoomServiceTest {

    @Mock
    private RoomRepository roomRepository;

    @Mock
    private ZoneRepository zoneRepository;

    @InjectMocks
    private RoomService roomService;

    @Captor
    ArgumentCaptor<Room> roomCaptor;

    private Room exampleRoom;
    private Room exampleRoomNoZoneID;
    private ObjectId roomId, zoneId, houseId;

    @BeforeEach
    void setUp() {
        roomId = new ObjectId();
        zoneId = new ObjectId();
        houseId = new ObjectId();

        exampleRoom = new Room("Example Room", 20.5, 22.5, houseId, zoneId);
        exampleRoom.setId(roomId);

        exampleRoomNoZoneID = new Room("Example Room", 20.5, 22.5, houseId, null); // zoneId is null to indicate
                                                                                   // unassigned
        exampleRoomNoZoneID.setId(roomId);
    }

    @Test
    void createRoom_success() {
        when(roomRepository.save(any(Room.class))).thenReturn(exampleRoom);

        Room createdRoom = roomService.createRoom(exampleRoom.getName(), exampleRoom.getActualTemp(),
                exampleRoom.getDesiredTemp(), exampleRoom.getHouseId(),
                exampleRoom.getZoneId());

        assertThat(createdRoom.getId()).isEqualTo(roomId);
        verify(roomRepository, times(1)).save(any(Room.class));
    }

    @Test
    void assignRoomToZone_success() {
        ObjectId commonHouseId = new ObjectId(); // Common houseId to match both room and zone
        Zone exampleZone = new Zone();
        exampleZone.setHouseId(commonHouseId); // Setting the same houseId as the room
        exampleRoom.setHouseId(commonHouseId); // Ensuring the room has a matching houseId

        when(roomRepository.findById(roomId)).thenReturn(Optional.of(exampleRoom));
        when(zoneRepository.findById(zoneId)).thenReturn(Optional.of(exampleZone));

        boolean success = roomService.assignRoomToZone(roomId, zoneId);

        assertThat(success).isTrue();
        verify(roomRepository).save(any(Room.class)); // Changed to any(Room.class) to ensure it captures any Room
                                                      // object passed to save.
    }

    @Test
    void getRoomsByZoneId_success() {
        when(roomRepository.findByZoneId(zoneId)).thenReturn(Arrays.asList(exampleRoom));

        List<Room> rooms = roomService.getRoomsByZoneId(zoneId);

        assertThat(rooms).isNotEmpty();
        assertThat(rooms.get(0).getId()).isEqualTo(roomId);
    }

    @Test
    void getRoomsByHouseId_success() {
        when(roomRepository.findByHouseId(houseId)).thenReturn(Arrays.asList(exampleRoom));

        List<Room> rooms = roomService.getRoomsByHouseId(houseId);

        assertThat(rooms).isNotEmpty();
        assertThat(rooms.get(0).getHouseId()).isEqualTo(houseId);
    }

    @Test
    void getUnassignedRoomsByHouseId_success() {
        // Ensure the roomRepository mock returns the correctly unassigned exampleRoom
        when(roomRepository.findByHouseIdAndZoneIdIsNull(houseId)).thenReturn(Arrays.asList(exampleRoomNoZoneID));

        List<Room> rooms = roomService.getUnassignedRoomsByHouseId(houseId);

        assertThat(rooms).isNotEmpty(); // Verifies that rooms are indeed returned
        assertThat(rooms.get(0).getZoneId()).isNull(); // Correctly checks that the returned room is unassigned
    }

    @Test
    void updateRoomTemperature_success() {
        ObjectId roomId = new ObjectId();
        double newTemperature = 25.0;
        Instant updateTimestamp = Instant.now();

        Room existingRoom = new Room(); // Assuming a constructor or setters to initialize
        existingRoom.setActualTemp(20.0); // Initial temperature
        existingRoom.setLastUpdateTimestamp(Instant.now().minusSeconds(3600)); // Initial timestamp

        when(roomRepository.findById(roomId)).thenReturn(Optional.of(existingRoom));

        roomService.updateRoomTemperature(roomId, newTemperature, updateTimestamp);

        ArgumentCaptor<Room> roomArgumentCaptor = ArgumentCaptor.forClass(Room.class);
        verify(roomRepository).save(roomArgumentCaptor.capture());

        Room updatedRoom = roomArgumentCaptor.getValue();
        assertEquals(newTemperature, updatedRoom.getActualTemp(), "The room temperature should be updated.");
        assertEquals(updateTimestamp, updatedRoom.getLastUpdateTimestamp(),
                "The room update timestamp should be updated.");
    }

}