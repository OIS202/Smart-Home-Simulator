package com.Recievers;

import org.bson.json.JsonObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.SmartHomeSimulator.iHome.Receivers.LightReceiver;

import static org.mockito.Mockito.*;

class LightReceiverTest {

    private LightReceiver lightReceiver;

    @BeforeEach
    void setUp() {
        lightReceiver = new LightReceiver();
        // Assuming you can set a base URL or have other initializable properties
    }

    @Test
    void testOperation() {
        // This is illustrative; testing actual console output or Json processing isn't
        // straightforward in unit tests
        JsonObject mockRequest = mock(JsonObject.class);
        lightReceiver.operation(mockRequest);
        // Verify any interactions or side effects here
    }
}
