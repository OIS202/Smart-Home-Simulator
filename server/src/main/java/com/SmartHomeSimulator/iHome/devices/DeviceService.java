package com.SmartHomeSimulator.iHome.devices;

import java.util.List;

import org.bson.types.ObjectId;
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

    public List<Device> getDevicesByType(String type) {
        return deviceRepository.findByType(type);
    }

    public List<Device> getDevicesByRoomId(ObjectId roomId) {
        return deviceRepository.findByRoomId(roomId);
    }

    public List<Device> getDevicesByHouseId(ObjectId houseId) {
        return deviceRepository.findByHouseId(houseId);
    }
}
