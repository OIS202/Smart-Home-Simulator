package com.SmartHomeSimulator.iHome.User;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;// importation for the logger 
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public User registerUser(String firstName, String lastName, String email, String phoneNumber, String password)
            throws Exception {
        if (userRepository.existsByEmail(email)) {
            throw new Exception("Email already exists.");
        }
        User newUser = new User(firstName, lastName, email, phoneNumber, password);
        return userRepository.save(newUser);
    }

    public User authenticateUser(String email, String password) throws Exception {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (!optionalUser.isPresent()) {
            throw new Exception("User doesn't exist");
        }
        User user = optionalUser.get();
        if (!(user.getPassword().equals(password))) {
            throw new Exception("Invalid password");
        }
        logger.info("Authenticated user: {}", user);// example on how to log in the server terminal 
        return user;
    }
}
