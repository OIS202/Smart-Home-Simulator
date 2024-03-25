package com.SmartHomeSimulator.iHome.Zone;

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
        Zone newZone = zoneService.addZone(zone.getName(), zone.getActualTemp(), zone.getDesiredTemp());
        return ResponseEntity.ok(newZone);
    }
}
