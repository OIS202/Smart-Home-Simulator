package com.SmartHomeSimulator.iHome;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // This annotation is used for RESTful web services and makes the class a controller
public class Controller {

    @GetMapping("/hello")
    public String helloworld() { // Changed to public
        return "Hello World"; // Note: Fixed the string to have a space
    }
}
