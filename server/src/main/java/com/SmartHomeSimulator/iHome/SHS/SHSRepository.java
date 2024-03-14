package com.SmartHomeSimulator.iHome.SHS;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SHSRepository extends MongoRepository<SHS, String> {

}