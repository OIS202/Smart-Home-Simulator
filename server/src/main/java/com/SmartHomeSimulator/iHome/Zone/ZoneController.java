package com.SmartHomeSimulator.iHome.Zone;

import java.util.List;

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

    @GetMapping("/byHouseId/{houseId}")
    public ResponseEntity<List<Zone>> getZonesByHouseId(@PathVariable String houseId) {
        System.out.println("Request to get zones by house ID: " + houseId);

        List<Zone> zones = zoneService.getZonesByHouseId(new ObjectId(houseId));
        return ResponseEntity.ok(zones);
    }
}
