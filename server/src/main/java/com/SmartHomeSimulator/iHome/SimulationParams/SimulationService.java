package com.SmartHomeSimulator.iHome.SimulationParams;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;
import java.sql.Date;
import java.sql.Time;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SmartHomeSimulator.iHome.User.User;

@Service
public class SimulationService {

    @Autowired
    private SimulationRepository shsRepository;

    public Simulation registerSimulation(List<User> users, Date date, Time time) {
        Simulation newShs = new Simulation(users, date, time);
        return shsRepository.save(newShs);
    }

}