package com.example.demo.controllers;

import com.example.demo.entities.Screening;
import com.example.demo.entities.Seat;
import com.example.demo.services.ScreeningService;
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
public class SeatController {

    @Autowired
    SeatService seatService;


    @GetMapping("/seats")
    public List<Seat> getAllSeats(){
        return seatService.findAllSeats();
    }

    @GetMapping("/seats/{seat_id}")
    public Optional<Seat> getOneSeat(@PathVariable int seat_id){
        return seatService.findOneSeat(seat_id);
    }

}
