package com.SmartHomeSimulator.iHome.Zone;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ZoneService {

    private final ZoneRepository zoneRepository;

    @Autowired
    public ZoneService(ZoneRepository zoneRepository) {
        this.zoneRepository = zoneRepository;
    }

    /**
     * Adds a new zone.
     * 
     * @param name        The name of the zone.
     * @param actualTemp  The actual temperature of the zone.
     * @param desiredTemp The desired temperature of the zone.
     * @return The saved zone entity.
     */
    public Zone addZone(String name, double actualTemp, double desiredTemp) {
        Zone newZone = new Zone();
        newZone.setName(name);
        newZone.setActualTemp(actualTemp);
        newZone.setDesiredTemp(desiredTemp);

        return zoneRepository.save(newZone);
    }
}
