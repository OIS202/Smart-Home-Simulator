package com.SmartHomeSimulator.iHome.devices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeviceController {
    // @Autowired
    // private DeviceRepository deviceRepository;
    // @Autowired
    // private DeviceService deviceService;

    public void switch(@RequestBody Device device) {
        if (device.getIsOn() == false){
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
        