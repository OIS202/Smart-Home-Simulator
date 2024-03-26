package com.Command;

import com.SmartHomeSimulator.iHome.Commands.WindowOpenCommand;
import com.SmartHomeSimulator.iHome.Receivers.WindowReceiver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class WindowOpenCommandTest {

    private WindowOpenCommand windowOpenCommand;
    private WindowReceiver windowReceiver;

    @BeforeEach
    void setUp() {
        windowReceiver = mock(WindowReceiver.class);
        windowOpenCommand = new WindowOpenCommand(windowReceiver);
    }

    @Test
    void testExecute() {
        windowOpenCommand.execute();
        // Verify interactions with windowReceiver if applicable, e.g.,
        // verify(windowReceiver).openWindow(); assuming such a method exists.
    }
}
