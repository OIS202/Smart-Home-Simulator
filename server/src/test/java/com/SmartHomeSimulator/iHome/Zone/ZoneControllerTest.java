package com.SmartHomeSimulator.iHome.Zone;

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

import java.util.Collections;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(ZoneController.class)
public class ZoneControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ZoneService zoneService;

    private Zone exampleZone;
    private String exampleHouseId;

    @BeforeEach
    void setUp() {
        exampleHouseId = new ObjectId().toString();
        exampleZone = new Zone();
        exampleZone.setName("Example Zone");
        exampleZone.setActualTemp(22.0);
        exampleZone.setDesiredTemp(24.0);
        exampleZone.setHouseId(new ObjectId(exampleHouseId));
    }

    @Test
    @WithMockUser
    void getZonesByHouseId_ReturnsListOfZones() throws Exception {
        List<Zone> zones = Collections.singletonList(exampleZone);
        given(zoneService.getZonesByHouseId(new ObjectId(exampleHouseId))).willReturn(zones);

        mockMvc.perform(get("/zones/byHouseId/{houseId}", exampleHouseId)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].name", is(exampleZone.getName())));
    }
}
