package com.Command;

import com.SmartHomeSimulator.iHome.Commands. WindowCloseCommand;
import com.SmartHomeSimulator.iHome.Receivers.WindowReceiver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class  WindowCloseCommandTest {

    private  WindowCloseCommand  windowCloseCommand;
    private WindowReceiver windowReceiver;

    @BeforeEach
    void setUp() {
        windowReceiver = mock(WindowReceiver.class);
         windowCloseCommand = new  WindowCloseCommand(windowReceiver);
    }

    @Test
    void testExecute() {
         windowCloseCommand.execute();
        // Verify interactions with windowReceiver if applicable, e.g.,
        // verify(windowReceiver).openWindow(); assuming such a method exists.
    }
}
