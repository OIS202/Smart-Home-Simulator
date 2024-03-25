package com;

import org.junit.jupiter.api.Test;

import com.SmartHomeSimulator.iHome.Observer;
import com.SmartHomeSimulator.iHome.Subject;

import static org.mockito.Mockito.*;

public class SubjectTest {

    @Test
    public void testSubscriptionMechanism() {
        Subject subject = mock(Subject.class);
        Observer observer = mock(Observer.class);

        subject.subscribe(observer);
        subject.notifyObservers();
        subject.unsubscribe(observer);

        verify(subject).subscribe(observer);
        verify(subject).notifyObservers();
        verify(subject).unsubscribe(observer);
    }
}
