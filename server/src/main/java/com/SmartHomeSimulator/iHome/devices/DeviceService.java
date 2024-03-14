package com.SmartHomeSimulator.iHome.devices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeviceService {
    @Autowired
    private DeviceRepository deviceRepository;

    public Device registerDevice(String type, String location, String name) throws Exception {
        if (deviceRepository.existsByName(name)) {
            throw new Exception("Device already exists.");
        }
        Device newDevice = new Device(type, location, name);
        return deviceRepository.save(newDevice);
    }
}
