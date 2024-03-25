package com.Command;

import com.SmartHomeSimulator.iHome.Commands.FindRoomCommand;
import com.SmartHomeSimulator.iHome.Receivers.RoomReceiver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class FindRoomCommandTest {

    private FindRoomCommand findRoomCommand;
    private RoomReceiver roomReceiver;

    @BeforeEach
    void setUp() {
        roomReceiver = mock(RoomReceiver.class);
        findRoomCommand = new FindRoomCommand(roomReceiver);
    }

    @Test
    void testExecute() {
        findRoomCommand.execute();
        // Verify any interactions if applicable
    }
}
