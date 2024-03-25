package com.SmartHomeSimulator.iHome.Zone;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ZoneRepository extends MongoRepository<Zone, ObjectId> {
    // No additional methods are required at this moment
}
