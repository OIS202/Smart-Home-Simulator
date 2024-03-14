package com;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.SmartHomeSimulator.iHome.User.User;
import com.SmartHomeSimulator.iHome.User.UserRepository;
import com.SmartHomeSimulator.iHome.User.UserService;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void whenRegisterUser_withNewEmail_thenSuccess() throws Exception {
        User newUser = new User("John", "Doe", "john.doe@example.com", "1234567890", "password");
        when(userRepository.existsByEmail(anyString())).thenReturn(false);
        when(userRepository.save(any(User.class))).thenReturn(newUser);

        User registeredUser = userService.registerUser("John", "Doe", "john.doe@example.com", "1234567890", "password");

        assertNotNull(registeredUser);
        assertEquals("john.doe@example.com", registeredUser.getEmail());
    }

    @Test
    void whenRegisterUser_withExistingEmail_thenThrowException() {
        when(userRepository.existsByEmail(anyString())).thenReturn(true);

        Exception exception = assertThrows(Exception.class, () ->
            userService.registerUser("Jane", "Doe", "jane.doe@example.com", "0987654321", "password123")
        );

        assertEquals("Email already exists.", exception.getMessage());
    }

    @Test
    void whenAuthenticateUser_withCorrectCredentials_thenSuccess() throws Exception {
        User existingUser = new User("John", "Doe", "john.doe@example.com", "1234567890", "password");
        when(userRepository.findByEmail("john.doe@example.com")).thenReturn(Optional.of(existingUser));

        User authenticatedUser = userService.authenticateUser("john.doe@example.com", "password");

        assertNotNull(authenticatedUser);
        assertEquals("john.doe@example.com", authenticatedUser.getEmail());
    }

    @Test
    void whenAuthenticateUser_withNonExistingEmail_thenThrowException() {
        when(userRepository.findByEmail("non.existing@example.com")).thenReturn(Optional.empty());

        Exception exception = assertThrows(Exception.class, () ->
            userService.authenticateUser("non.existing@example.com", "password")
        );

        assertEquals("User doesn't exist", exception.getMessage());
    }

    @Test
    void whenAuthenticateUser_withIncorrectPassword_thenThrowException() {
        User existingUser = new User("John", "Doe", "john.doe@example.com", "1234567890", "password");
        when(userRepository.findByEmail("john.doe@example.com")).thenReturn(Optional.of(existingUser));

        Exception exception = assertThrows(Exception.class, () ->
            userService.authenticateUser("john.doe@example.com", "wrongpassword")
        );

        assertEquals("Invalid password", exception.getMessage());
    }
}
