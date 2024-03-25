package com.Command;

import com.SmartHomeSimulator.iHome.Commands.DoorOpenCommand;
import com.SmartHomeSimulator.iHome.Receivers.DoorReceiver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class DoorOpenCommandTest {

    private DoorOpenCommand doorOpenCommand;
    private DoorReceiver doorReceiver;

    @BeforeEach
    void setUp() {
        doorReceiver = mock(DoorReceiver.class);
        doorOpenCommand = new DoorOpenCommand(doorReceiver);
    }

    @Test
    void testExecute() {
        doorOpenCommand.execute();
        // Verify any interactions if applicable
    }
}
