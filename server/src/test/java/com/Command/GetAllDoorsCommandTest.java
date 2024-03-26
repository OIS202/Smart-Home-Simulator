package com.Command;

import com.SmartHomeSimulator.iHome.Commands.GetAllDoorsCommand;
import com.SmartHomeSimulator.iHome.Receivers.RoomReceiver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class GetAllDoorsCommandTest {

    private GetAllDoorsCommand getAllDoorsCommand;
    private RoomReceiver roomReceiver;

    @BeforeEach
    void setUp() {
        roomReceiver = mock(RoomReceiver.class);
        getAllDoorsCommand = new GetAllDoorsCommand(roomReceiver);
    }

    @Test
    void testExecute() {
        getAllDoorsCommand.execute();
        // Verify any interactions if applicable
    }
}
