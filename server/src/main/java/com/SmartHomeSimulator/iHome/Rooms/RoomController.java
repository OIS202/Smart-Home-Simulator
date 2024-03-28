// RoomController.java
package com.SmartHomeSimulator.iHome.Rooms;

import java.util.List;

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

    @GetMapping("/byZone/{zoneId}")
    public ResponseEntity<List<Room>> getRoomsByZoneId(@PathVariable String zoneId) {
        return ResponseEntity.ok(roomService.getRoomsByZoneId(new ObjectId(zoneId)));
    }

    @GetMapping("/byHouse/{houseId}")
    public ResponseEntity<List<Room>> getRoomsByHouseId(@PathVariable String houseId) {
        return ResponseEntity.ok(roomService.getRoomsByHouseId(new ObjectId(houseId)));
    }

    @GetMapping("/unassigned/byHouse/{houseId}")
    public ResponseEntity<List<Room>> getUnassignedRoomsByHouseId(@PathVariable String houseId) {
        List<Room> unassignedRooms = roomService.getUnassignedRoomsByHouseId(new ObjectId(houseId));
        return ResponseEntity.ok(unassignedRooms);
    }
}
