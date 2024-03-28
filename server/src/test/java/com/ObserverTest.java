package com;

import org.junit.jupiter.api.Test;

import com.SmartHomeSimulator.iHome.Observer;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class ObserverTest {

    @Test
    public void testUpdate() {
        Observer observer = mock(Observer.class);
        observer.update("Update context");
        verify(observer).update("Update context");
    }
}