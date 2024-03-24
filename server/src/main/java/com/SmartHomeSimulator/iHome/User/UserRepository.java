package com.SmartHomeSimulator.iHome.User;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import org.bson.types.ObjectId;
import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    List<User> findAllByHouseId(ObjectId houseId);
}