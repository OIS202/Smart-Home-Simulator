package com.SmartHomeSimulator.iHome.SimulationParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.SmartHomeSimulator.iHome.User.User;

@RestController
public class SimulationController {

    @Autowired
    private SimulationRepository shsRepository;
    
    @Autowired
    private SimulationService shsService;

    @PostMapping("/startsimulation")
    public Simulation startSimulation(@RequestBody Simulation shs) {
        Simulation newSimulation = null;
        try {
            newSimulation = shsService.registerSimulation(shs.getUsers(), shs.getDate(), shs.getTime());
            return newSimulation;
        }
        catch (Exception e) {
            System.err.println(e.getMessage());
        }
        return newSimulation;
    }
}