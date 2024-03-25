package com.SmartHomeSimulator.iHome.Zone;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/zones")
public class ZoneController {

    private final ZoneService zoneService;

    @Autowired
    public ZoneController(ZoneService zoneService) {
        this.zoneService = zoneService;
    }

    @PostMapping
    public ResponseEntity<Zone> addZone(@RequestBody Zone zone) {
        // Assuming zone includes houseId as a String and is correctly parsed
        Zone newZone = zoneService.addZone(zone.getName(), zone.getActualTemp(), zone.getDesiredTemp(),
                zone.getHouseId());
        return ResponseEntity.ok(newZone);
    }
}
