package com.SmartHomeSimulator.iHome.Session;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SessionRepository extends MongoRepository<Session, String> {
    Session findBySessionId(String sessionId);
    void deleteBySessionId(String sessionId);
}
