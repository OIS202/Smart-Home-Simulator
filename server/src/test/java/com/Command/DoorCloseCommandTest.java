package com.Command;

import com.SmartHomeSimulator.iHome.Commands.DoorCloseCommand;
import com.SmartHomeSimulator.iHome.Receivers.DoorReceiver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class DoorCloseCommandTest {

    private DoorCloseCommand doorCloseCommand;
    private DoorReceiver doorReceiver;

    @BeforeEach
    void setUp() {
        doorReceiver = mock(DoorReceiver.class);
        doorCloseCommand = new DoorCloseCommand(doorReceiver);
    }

    @Test
    void testExecute() {
        doorCloseCommand.execute();
        // Verify any interactions if applicable
    }
}
