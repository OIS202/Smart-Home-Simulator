// RoomController.java
package com.SmartHomeSimulator.iHome.Rooms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    private final RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PatchMapping(path = "/assignRoomToZone", consumes = "application/x-www-form-urlencoded")
    public ResponseEntity<?> assignRoomToZone(@RequestParam String roomName, @RequestParam String zoneName) {
        boolean success = roomService.assignRoomToZoneByName(roomName, zoneName);
        if (success) {
            return ResponseEntity.ok("Room assigned to zone successfully.");
        } else {
            return ResponseEntity.badRequest().body("Assignment failed. Check the names or room already assigned.");
        }
    }

}
