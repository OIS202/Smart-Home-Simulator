package com.SmartHomeSimulator.iHome.Room;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import com.SmartHomeSimulator.iHome.Rooms.Room;
import com.SmartHomeSimulator.iHome.Rooms.RoomController;
import com.SmartHomeSimulator.iHome.Rooms.RoomService;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(RoomController.class)
public class RoomControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RoomService roomService;

    @Test
    @WithMockUser
    void getRoomsByZoneId_Success() throws Exception {
        when(roomService.getRoomsByZoneId(any(ObjectId.class)))
                .thenReturn(java.util.Collections.singletonList(new Room()));

        mockMvc.perform(get("/rooms/byZone/{zoneId}", "507f1f77bcf86cd799439011"))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser
    void getRoomsByHouseId_Success() throws Exception {
        when(roomService.getRoomsByHouseId(any(ObjectId.class)))
                .thenReturn(java.util.Collections.singletonList(new Room()));

        mockMvc.perform(get("/rooms/byHouse/{houseId}", "507f191e810c19729de860ea"))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser
    void getUnassignedRoomsByHouseId_Success() throws Exception {
        when(roomService.getUnassignedRoomsByHouseId(any(ObjectId.class)))
                .thenReturn(java.util.Collections.singletonList(new Room()));

        mockMvc.perform(get("/rooms/unassigned/byHouse/{houseId}", "507f191e810c19729de860ea"))
                .andExpect(status().isOk());
    }
}
