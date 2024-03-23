package com.SmartHomeSimulator.iHome.User;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.SmartHomeSimulator.iHome.House.House;
import com.SmartHomeSimulator.iHome.House.HouseService;
import com.SmartHomeSimulator.iHome.Util.CsvUtil;
import com.SmartHomeSimulator.iHome.Session.Session;
import com.SmartHomeSimulator.iHome.Session.SessionRepository;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.bson.types.ObjectId;
import org.slf4j.Logger;// importation for the logger 
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HouseService houseService;

    @Autowired
    private SessionRepository sessionRepository;

    public UserResponseDto registerUser(String firstName, String lastName, String email,
            String phoneNumber, String password, MultipartFile file) throws Exception {
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
        return user;
    }

    public void createSession(String userId, HttpServletResponse response, HttpServletRequest request) {
        Session session = new Session();
        session.setSessionId(request.getSession().getId());
        session.setUserId(userId);
        session.setCreatedAt(System.currentTimeMillis());
        sessionRepository.save(session);

        Cookie sessionCookie = new Cookie("SESSIONID", session.getSessionId());
        sessionCookie.setHttpOnly(true);
        sessionCookie.setPath("/");
        sessionCookie.setMaxAge(7 * 24 * 60 * 60); // 7 days
        response.addCookie(sessionCookie);
    }

    public void deleteSession(HttpServletRequest request, HttpServletResponse response) {
        Cookie sessionCookie = new Cookie("SESSIONID", null);
        sessionCookie.setHttpOnly(true);
        sessionCookie.setPath("/");
        sessionCookie.setMaxAge(0); // Delete cookie
        response.addCookie(sessionCookie);

        String sessionId = request.getSession().getId();
        sessionRepository.deleteBySessionId(sessionId);
        request.getSession().invalidate();
    }
}
