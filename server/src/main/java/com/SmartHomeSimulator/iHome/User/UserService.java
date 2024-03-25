package com.SmartHomeSimulator.iHome.User;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.SmartHomeSimulator.iHome.House.House;
import com.SmartHomeSimulator.iHome.House.HouseService;
import com.SmartHomeSimulator.iHome.User.User.UserType;
import com.SmartHomeSimulator.iHome.Util.CsvUtil;

import org.bson.types.ObjectId;
import org.slf4j.Logger;// importation for the logger 
import org.slf4j.LoggerFactory;

import com.SmartHomeSimulator.iHome.User.User.UserType;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HouseService houseService;

    public UserResponseDto registerUser(String firstName, String lastName, String email,
            String phoneNumber, String password, MultipartFile file, UserType userType) throws Exception {
        if (userRepository.existsByEmail(email)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already exists.");
        }

        Map<String, Integer> roomCounts = CsvUtil.parseCsvToMap(file);
        House house = houseService.createHouse(roomCounts);

        // Create a new User object
        User newUser = new User();
        newUser.setFirstName(firstName);
        newUser.setLastName(lastName);
        newUser.setEmail(email);
        newUser.setPhoneNumber(phoneNumber);
        newUser.setPassword(password); // Make sure to encode the password in real scenarios
        newUser.setHouseId(house.getId());
        newUser.setLocation("outside");
        newUser.setUserType(userType.PARENT);

        // Save the User object to the database
        newUser = userRepository.save(newUser);

        // Convert the User object to a UserResponseDto object
        UserResponseDto userResponseDto = new UserResponseDto(newUser);

        // Optionally log the result
        logger.info("User registered with ID: {}", userResponseDto.getId());

        return userResponseDto;
    }

   
    public User authenticateUser(String email, String password) throws Exception {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (!optionalUser.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User doesn't exist");
        }
        User user = optionalUser.get();

        if (!(user.getPassword().equals(password))) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid password");
        }
        // logger.info("Authenticated user: {}", user);// example on how to log in the
        // server terminal
        // logger.info("Authenticated user: {}", user);// example on how to log in the
        // server terminal
        return user;
    }

    public UserResponseDto addUser(String firstName, String lastName, String email,
            String phoneNumber, String password, ObjectId houseId, UserType userType)
            throws Exception {
        if (userRepository.existsByEmail(email)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already exists.");
        }

        houseId = new ObjectId("65fcdf7132513f5cebd28837"); //hard-coded object ID until further notice 
        // Create a new User object
        User newUser = new User();
        newUser.setFirstName(firstName);
        newUser.setLastName(lastName);
        newUser.setEmail(email);
        newUser.setPhoneNumber(phoneNumber);
        newUser.setPassword(password); // Make sure to encode the password in real scenarios
        newUser.setHouseId(houseId);
        newUser.setUserType(userType);

        // Save the User object to the database
        newUser = userRepository.save(newUser);

        // Convert the User object to a UserResponseDto object
        UserResponseDto userResponseDto = new UserResponseDto(newUser);

        // Optionally log the result
        logger.info("User registered with ID: {}", userResponseDto.getId());

        return userResponseDto;
    }

    //TEKA CODE
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public List<User> getUsersByHouseId(ObjectId houseId) {
        return userRepository.findAllByHouseId(houseId);
    }

    public User updateUserLocation(String email, String location) throws Exception {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (!userOptional.isPresent()) {
            throw new Exception("User not found");
        }
        User user = userOptional.get();
        user.setLocation(location);
        return userRepository.save(user);
    }

}
