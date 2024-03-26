package com.Command;

import com.SmartHomeSimulator.iHome.Commands.GetAllLightsCommand;
import com.SmartHomeSimulator.iHome.Receivers.RoomReceiver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class GetAllLightsCommandTest {

    private GetAllLightsCommand getAllLightsCommand;
    private RoomReceiver roomReceiver;

    @BeforeEach
    void setUp() {
        roomReceiver = mock(RoomReceiver.class);
        getAllLightsCommand = new GetAllLightsCommand(roomReceiver);
    }

    @Test
    void testExecute() {
        getAllLightsCommand.execute();
        // Verify any interactions if applicable
    }
}
