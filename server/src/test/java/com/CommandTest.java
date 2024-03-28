package com;

import org.junit.jupiter.api.Test;

import com.SmartHomeSimulator.iHome.Command;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class CommandTest {

    @Test
    public void testExecute() {
        Command command = mock(Command.class);
        command.execute();
        verify(command).execute();
    }
}
