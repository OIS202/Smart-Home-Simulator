// RoomController.java
package com.SmartHomeSimulator.iHome.Rooms;

import org.bson.types.ObjectId;
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

    @PatchMapping("/assignRoomToZone")
    public ResponseEntity<?> assignRoomToZone(@RequestParam String roomId, @RequestParam String zoneId) {
        try {
            ObjectId roomObjId = new ObjectId(roomId);
            ObjectId zoneObjId = new ObjectId(zoneId);
            boolean success = roomService.assignRoomToZone(roomObjId, zoneObjId);

            if (success) {
                return ResponseEntity.ok().body("Room successfully assigned to zone.");
            } else {
                return ResponseEntity.badRequest().body(
                        "Failed to assign room to zone. Ensure the room and zone exist, and belong to the same house.");
            }
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid ID format.");
        }
    }
}
