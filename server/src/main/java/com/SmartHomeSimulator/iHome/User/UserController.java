package com.SmartHomeSimulator.iHome.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;


    @GetMapping("/hello")
    public String helloworld() { // Changed to public
        return "Hello World"; // Note: Fixed the string to have a space
    }
    @PostMapping("/signup")
    public User signUp(@RequestBody User user) {
        User newUser =null;
        try{
            newUser =  userService.registerUser(user.getFirstName(), user.getLastName(), user.getEmail(), user.getPhoneNumber(),user.getPassword(), user.getUserType());
            return newUser;
        }catch(Exception e){
            System.err.println(e.getMessage());
        }
        return newUser;
    }
    @GetMapping("/signin")
    public User signIn(@RequestBody User user){
        User ourUser = null;
        try {
            ourUser = userService.authenticateUser(user.getEmail(), user.getPassword());
            return ourUser;
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        return ourUser;
    }
}
