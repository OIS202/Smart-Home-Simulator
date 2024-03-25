package com.SmartHomeSimulator.iHome.Zone;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface ZoneRepository extends MongoRepository<Zone, ObjectId> {
    Optional<Zone> findByName(String name);
}
