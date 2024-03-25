package com.SmartHomeSimulator.iHome.Zone;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class ZoneServiceTest {

    @Mock
    private ZoneRepository zoneRepository;

    @InjectMocks
    private ZoneService zoneService;

    private Zone exampleZone;
    private ObjectId houseId;

    @BeforeEach
    void setUp() {
        houseId = new ObjectId();
        exampleZone = new Zone(); // Assuming default constructor sets up the object
        exampleZone.setName("Test Zone");
        exampleZone.setActualTemp(22.0);
        exampleZone.setDesiredTemp(24.0);
        exampleZone.setHouseId(houseId);
    }

    @Test
    void addZone_ReturnsSavedZone() {
        when(zoneRepository.save(any(Zone.class))).thenReturn(exampleZone);

        Zone savedZone = zoneService.addZone(exampleZone.getName(), exampleZone.getActualTemp(),
                exampleZone.getDesiredTemp(), houseId);

        assertThat(savedZone).isNotNull();
        assertThat(savedZone.getName()).isEqualTo("Test Zone");
        verify(zoneRepository).save(any(Zone.class));
    }

    @Test
    void getZonesByHouseId_ReturnsListOfZones() {
        when(zoneRepository.findByHouseId(houseId)).thenReturn(Arrays.asList(exampleZone));

        List<Zone> zones = zoneService.getZonesByHouseId(houseId);

        assertThat(zones).isNotEmpty();
        assertThat(zones.get(0).getName()).isEqualTo("Test Zone");
        verify(zoneRepository).findByHouseId(houseId);
    }

    @Test
    void addZone_AndRetrieveByHouseId() {
        when(zoneRepository.save(any(Zone.class))).thenReturn(exampleZone);
        when(zoneRepository.findByHouseId(houseId)).thenReturn(Arrays.asList(exampleZone));

        Zone savedZone = zoneService.addZone(exampleZone.getName(), exampleZone.getActualTemp(),
                exampleZone.getDesiredTemp(), houseId);
        List<Zone> zones = zoneService.getZonesByHouseId(houseId);

        assertThat(savedZone).isNotNull();
        assertThat(zones).contains(savedZone);
        verify(zoneRepository).save(any(Zone.class));
        verify(zoneRepository).findByHouseId(houseId);
    }
}
