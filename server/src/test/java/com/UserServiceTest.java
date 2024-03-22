// package com;

// import org.bson.types.ObjectId;
// import org.junit.jupiter.api.Test;
// import org.junit.jupiter.api.extension.ExtendWith;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.mockito.Mockito;
// import org.mockito.junit.jupiter.MockitoExtension;
// import org.springframework.mock.web.MockMultipartFile;
// import org.springframework.web.multipart.MultipartFile;
// import org.springframework.web.server.ResponseStatusException;

// import com.SmartHomeSimulator.iHome.House.House;
// import com.SmartHomeSimulator.iHome.House.HouseService;
// import com.SmartHomeSimulator.iHome.User.User;
// import com.SmartHomeSimulator.iHome.User.UserRepository;
// import com.SmartHomeSimulator.iHome.User.UserResponseDto;
// import com.SmartHomeSimulator.iHome.User.UserService;

// import java.io.ByteArrayInputStream;
// import java.io.InputStream;
// import java.util.Optional;

// import static org.junit.jupiter.api.Assertions.*;
// import static org.mockito.ArgumentMatchers.any;
// import static org.mockito.ArgumentMatchers.anyMap;
// import static org.mockito.ArgumentMatchers.anyString;
// import static org.mockito.Mockito.*;

// @ExtendWith(MockitoExtension.class)
// public class UserServiceTest {

//     @Mock
//     private UserRepository userRepository;

//     @Mock
//     private HouseService houseService;

//     @InjectMocks
//     private UserService userService;

//     @Test
//     void whenRegisterUser_withNewEmail_thenSuccess() throws Exception {
//         // Existing setup code...
//         String csvContent = "Room,Number\nLiving Room,1\nBedroom,2";
//         InputStream is = new ByteArrayInputStream(csvContent.getBytes());
//         MultipartFile file = new MockMultipartFile("file", "test.csv", "text/plain", is);

//         ObjectId houseId = new ObjectId(); // Generate a new ObjectId for the mock House
//         House mockHouse = Mockito.mock(House.class); // Mock the House object
//         Mockito.when(mockHouse.getId()).thenReturn(houseId); // Stub the getId method to return the generated ObjectId

//         Mockito.when(houseService.createHouse(anyMap())).thenReturn(mockHouse); // Stub the createHouse method

//         ObjectId userId = new ObjectId(); // might need to set up mocking for saving the User if necessary

//         User newUser = new User("John", "Doe", "john.doe@example.com", "1234567890", "password", houseId);
//         newUser.setId(userId); // Don't forget to set the ID for the newUser, as it's not set in the
//                                // constructor
//         Mockito.when(userRepository.existsByEmail(anyString())).thenReturn(false);
//         Mockito.when(userRepository.save(any(User.class))).thenReturn(newUser);

//         // Call the method under test
//         UserResponseDto registeredUser = userService.registerUser("John", "Doe", "john.doe@example.com", "1234567890",
//                 "password", file);

//         // Assertions
//         assertNotNull(registeredUser);
//         assertEquals("john.doe@example.com", registeredUser.getEmail());

//     }

//     @Test
//     void whenRegisterUser_withExistingEmail_thenThrowException() {
//         when(userRepository.existsByEmail(anyString())).thenReturn(true);

//         Exception exception = assertThrows(ResponseStatusException.class, () -> userService.registerUser("Jane", "Doe",
//                 "jane.doe@example.com", "0987654321", "password123", mock(MultipartFile.class)));

//         assertTrue(exception.getMessage().contains("400 BAD_REQUEST \"Email already exists.\""));
//     }

//     @Test
//     void whenAuthenticateUser_withCorrectCredentials_thenSuccess() throws Exception {
//         ObjectId userId = new ObjectId();
//         User existingUser = new User("John", "Doe", "john.doe@example.com", "1234567890", "password", new ObjectId());
//         existingUser.setId(userId); // Set the user ID manually
//         when(userRepository.findByEmail("john.doe@example.com")).thenReturn(Optional.of(existingUser));

//         User authenticatedUser = userService.authenticateUser("john.doe@example.com", "password");

//         assertNotNull(authenticatedUser);
//         assertEquals("john.doe@example.com", authenticatedUser.getEmail());
//     }

//     @Test
//     void whenAuthenticateUser_withNonExistingEmail_thenThrowException() {
//         when(userRepository.findByEmail("non.existing@example.com")).thenReturn(Optional.empty());

//         Exception exception = assertThrows(ResponseStatusException.class,
//                 () -> userService.authenticateUser("non.existing@example.com", "password"));

//         assertTrue(exception.getMessage().contains("404 NOT_FOUND \"User doesn't exist\""));
//     }

//     @Test
//     void whenAuthenticateUser_withIncorrectPassword_thenThrowException() {
//         User existingUser = new User("John", "Doe", "john.doe@example.com", "1234567890", "password", new ObjectId());
//         when(userRepository.findByEmail("john.doe@example.com")).thenReturn(Optional.of(existingUser));

//         Exception exception = assertThrows(ResponseStatusException.class,
//                 () -> userService.authenticateUser("john.doe@example.com", "wrongpassword"));

//         assertTrue(exception.getMessage().contains("401 UNAUTHORIZED \"Invalid password\""));
//     }
// }
