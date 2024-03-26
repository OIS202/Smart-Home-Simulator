package com.Command;

import com.SmartHomeSimulator.iHome.Commands.GetAllWindowsCommand;
import com.SmartHomeSimulator.iHome.Receivers.RoomReceiver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class GetAllWindowsCommandTest {

    private GetAllWindowsCommand getAllWindowsCommand;
    private RoomReceiver roomReceiver;

    @BeforeEach
    void setUp() {
        roomReceiver = mock(RoomReceiver.class);
        getAllWindowsCommand = new GetAllWindowsCommand(roomReceiver);
    }

    @Test
    void testExecute() {
        getAllWindowsCommand.execute();
        // Verify any interactions if applicable
    }
}
