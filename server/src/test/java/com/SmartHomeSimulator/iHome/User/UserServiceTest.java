package com.SmartHomeSimulator.iHome.User;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.SmartHomeSimulator.iHome.House.House;
import com.SmartHomeSimulator.iHome.House.HouseService;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private HouseService houseService;

    @InjectMocks
    private UserService userService;

    private User user;
    private MultipartFile file;
    private ObjectId userId;
    private ObjectId houseId;

    @BeforeEach
    void setUp() {
        userId = new ObjectId();
        houseId = new ObjectId();

        user = new User();
        user.setId(userId); // Assign the specific ObjectId here.
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setEmail("john.doe@example.com");
        user.setPhoneNumber("1234567890");
        user.setPassword("password");
        user.setHouseId(houseId); // Ensure consistent use of houseId.
        user.setLocation("outside");
        user.setUserType(User.UserType.PARENT);

        String csvContent = "room, number\nliving room,1\nbedroom,2";
        file = new MockMultipartFile("file", "filename.csv", "text/plain", csvContent.getBytes());
    }

    @Test
    void registerUser_withNewEmail_shouldSucceed() throws Exception {
        when(userRepository.existsByEmail(anyString())).thenReturn(false);

        when(userRepository.save(any(User.class))).thenAnswer(invocation -> {
            User savedUser = invocation.getArgument(0);
            savedUser.setId(userId); // Use the specific userId for the saved User.
            return savedUser;
        });

        House mockHouse = new House();
        mockHouse.setId(houseId); // Use the specific houseId.
        when(houseService.createHouse(any())).thenReturn(mockHouse);

        UserResponseDto result = userService.registerUser(user.getFirstName(), user.getLastName(), user.getEmail(),
                user.getPhoneNumber(), user.getPassword(), file, user.getUserType());

        assertNotNull(result);
        assertEquals(user.getEmail(), result.getEmail());
        assertEquals(userId.toHexString(), result.getId()); // Verify the userId matches the expected value.
    }

    @Test
    void registerUser_withExistingEmail_shouldThrowException() {
        when(userRepository.existsByEmail(anyString())).thenReturn(true);

        ResponseStatusException exception = assertThrows(ResponseStatusException.class,
                () -> userService.registerUser(user.getFirstName(), user.getLastName(), user.getEmail(),
                        user.getPhoneNumber(), user.getPassword(), file, user.getUserType()));

        assertEquals(HttpStatus.BAD_REQUEST, exception.getStatusCode());
        assertTrue(exception.getReason().contains("Email already exists."));
    }

    // @Test
    // void authenticateUser_withCorrectCredentials_shouldSucceed() {
    // when(userRepository.findByEmail(anyString())).thenReturn(Optional.of(user));

    // User result = userService.authenticateUser(user.getEmail(),
    // user.getPassword());

    // assertNotNull(result);
    // assertEquals(user.getEmail(), result.getEmail());
    // }

    @Test
    void authenticateUser_withNonExistingEmail_shouldThrowException() {
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        ResponseStatusException exception = assertThrows(ResponseStatusException.class,
                () -> userService.authenticateUser("non.existing@example.com", "password"));

        assertEquals(HttpStatus.NOT_FOUND, exception.getStatusCode());
        assertTrue(exception.getReason().contains("User doesn't exist"));
    }

    @Test
    void authenticateUser_withIncorrectPassword_shouldThrowException() {
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.of(user));

        ResponseStatusException exception = assertThrows(ResponseStatusException.class,
                () -> userService.authenticateUser(user.getEmail(), "wrongpassword"));

        assertEquals(HttpStatus.UNAUTHORIZED, exception.getStatusCode());
        assertTrue(exception.getReason().contains("Invalid password"));
    }

}