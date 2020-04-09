package com.example.demo.controllers;

import com.example.demo.entities.Screening;
import com.example.demo.services.ScreeningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest")
public class ScreeningController {

    @Autowired
    ScreeningService screeningService;


    @GetMapping("/screenings")
    public List<Screening> getAllScreenings(){
        return screeningService.findAllScreenings();
    }

    @GetMapping("/screenings/{screening_id}")
    public Optional<Screening> getOneScreening(@PathVariable int screening_id){
        return screeningService.findOneScreening(screening_id);
    }

    @PostMapping("/screenings")
    public Screening createNewScreening(@RequestBody Screening screening) {
        return screeningService.addNewScreening(screening);
    }

}
