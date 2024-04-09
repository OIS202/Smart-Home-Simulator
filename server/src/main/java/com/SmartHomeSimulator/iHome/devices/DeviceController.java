package com.SmartHomeSimulator.iHome.devices;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class DeviceController {
    @Autowired
    private DeviceService deviceService;

    // @Autowired
    // private DeviceRepository deviceRepository;
    // @Autowired
    // private DeviceService deviceService;

    @GetMapping("/sh-core")
    public void switchState(@RequestBody Device device) {
        if (device.getIsOn() == false) {
            try {
                device.setIsOn(true);
            } catch (Exception e) {
                System.err.println(e.getMessage());
            }
        } else {
            try {
                device.setIsOn(false);
            } catch (Exception e) {
                System.err.println(e.getMessage());
            }
        }
    }

    @GetMapping("/type/{type}")
    public List<Device> getDevicesByType(@PathVariable String type) {
        return deviceService.getDevicesByType(type);
    }

    @GetMapping("/room/{roomId}")
    public List<Device> getDevicesByRoomId(@PathVariable String roomId) {
        return deviceService.getDevicesByRoomId(new ObjectId(roomId));
    }

    @GetMapping("/house/{houseId}")
    public List<Device> getDevicesByHouseId(@PathVariable String houseId) {
        return deviceService.getDevicesByHouseId(new ObjectId(houseId));
    }
}
