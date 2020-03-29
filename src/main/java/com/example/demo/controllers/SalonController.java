package com.example.demo.controllers;

import com.example.demo.entities.Salon;
import com.example.demo.entities.Seat;
import com.example.demo.services.SalonService;
import com.example.demo.services.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest")
public class SalonController {

    @Autowired
    SalonService salonService;


    @GetMapping("/salons")
    public List<Salon> getAllSalons(){
        return salonService.findAllSalons();
    }

    @GetMapping("/salons/{salon_id}")
    public Optional<Salon> getOneSalon(@PathVariable int salon_id){
        return salonService.findOneSalon(salon_id);
    }


}
