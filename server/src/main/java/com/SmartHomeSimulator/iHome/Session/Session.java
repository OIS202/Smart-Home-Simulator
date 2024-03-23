package com.SmartHomeSimulator.iHome.Session;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sessions")
public class Session {
    
    @Id
    private ObjectId id;

    private String sessionId;
    private String userId; // Reference to the User document
    private long createdAt; // Timestamp for session creation

    // Constructors, getters, and setters

    public Session(){
        this.sessionId = "";
        this.userId = "";
        this.createdAt = 0;
    }

    public long getCreatedAt() {
        return createdAt;
    }
    public String getSessionId() {
        return sessionId;
    }
    public String getUserId() {
        return userId;
    }
    public void setCreatedAt(long createdAt) {
        this.createdAt = createdAt;
    }
    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }

}