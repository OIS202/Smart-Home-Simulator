package com.SmartHomeSimulator.iHome.User;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.SmartHomeSimulator.iHome.User.User.UserType;

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
            @RequestParam("file") MultipartFile file,
            @RequestParam("userType") UserType userType) {
        try {
            UserResponseDto newUserDto = userService.registerUser(firstName, lastName, email, phoneNumber, password,
                    file, userType);
            return ResponseEntity.ok(newUserDto);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody User user) {
        try {
            User authenticatedUser = userService.authenticateUser(user.getEmail(), user.getPassword());
            UserResponseDto userResponseDto = new UserResponseDto(authenticatedUser);
            return ResponseEntity.ok(userResponseDto);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/adduser")
    public ResponseEntity<?> addUser(
        @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("email") String email,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("password") String password,
            @RequestParam("houseId") ObjectId houseId,
            @RequestParam("userType") UserType userType
            ) {
        try {
            UserResponseDto newUserDto = userService.addUser(firstName, lastName, email, phoneNumber, password, houseId,
                userType);
            return ResponseEntity.ok(newUserDto);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

}

