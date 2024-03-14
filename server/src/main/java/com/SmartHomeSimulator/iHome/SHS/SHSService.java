package com.SmartHomeSimulator.iHome.SHS;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SmartHomeSimulator.iHome.User.User;

@Service
public class SHSService {

    @Autowired
    private SHSRepository shsRepository;

    public SHS registerSimulation(List<User> users, String date, String time) {
        SHS newShs = new SHS(users, date, time);
        return shsRepository.save(newShs);
    }

}