package com.SmartHomeSimulator.iHome.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<?> signUp(@RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("email") String email,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("password") String password,
            @RequestParam("file") MultipartFile file) {
        try {
            UserResponseDto newUserDto = userService.registerUser(firstName, lastName, email, phoneNumber, password,
                    file);
            return ResponseEntity.ok(newUserDto);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // @PostMapping("/signup")
    // public User signUp(@RequestBody User user) {
    // User newUser = null;
    // try {
    // newUser = userService.registerUser(user.getFirstName(), user.getLastName(),
    // user.getEmail(),
    // user.getPhoneNumber(), user.getPassword());
    // return newUser;
    // } catch (Exception e) {
    // System.err.println(e.getMessage());
    // }
    // return newUser;
    // }

    @PostMapping("/signin")
    public User signIn(@RequestBody User user) {
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
