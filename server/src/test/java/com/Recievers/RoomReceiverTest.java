package com.Recievers;

import org.bson.json.JsonObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.SmartHomeSimulator.iHome.Receivers.RoomReceiver;

import static org.mockito.Mockito.*;

class RoomReceiverTest {

    private RoomReceiver roomReceiver;

    @BeforeEach
    void setUp() {
        roomReceiver = new RoomReceiver();
        // Assuming you can set a base URL or have other initializable properties
    }

    @Test
    void testOperation() {
        // This is illustrative; testing actual console output or Json processing isn't
        // straightforward in unit tests
        JsonObject mockRequest = mock(JsonObject.class);
        roomReceiver.operation(mockRequest);
        // Verify any interactions or side effects here
    }
}
