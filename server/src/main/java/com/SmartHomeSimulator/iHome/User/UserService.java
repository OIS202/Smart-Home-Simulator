package com.SmartHomeSimulator.iHome.User;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

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
        return user;
    }

    public User updateUserLocation(String id, String location) throws Exception {
        Optional<User> userOptional = userRepository.findById(id);
        if (!userOptional.isPresent()) {
            throw new Exception("User not found");
        }
        User user = userOptional.get();
        user.setLocation(location);
        return userRepository.save(user);
    }
}
