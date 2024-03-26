package com.Command;

import com.SmartHomeSimulator.iHome.Commands. LightOnCommand;
import com.SmartHomeSimulator.iHome.Receivers.LightReceiver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class  LightOnCommandTest {

    private  LightOnCommand lightOffCommand;
    private LightReceiver lightReceiver;

    @BeforeEach
    void setUp() {
        lightReceiver = mock(LightReceiver.class);
        lightOffCommand = new  LightOnCommand(lightReceiver);
    }

    @Test
    void testExecute() {
        lightOffCommand.execute();
        // Verify any interactions if applicable
    }
}
