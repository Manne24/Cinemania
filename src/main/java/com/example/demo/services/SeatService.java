package com.example.demo.services;

import com.example.demo.entities.Screening;
import com.example.demo.entities.Seat;
import com.example.demo.repositories.ScreeningRepo;
import com.example.demo.repositories.SeatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SeatService {
    @Autowired
    SeatRepo seatRepo;

    public List<Seat> findAllSeats() {
        return (List<Seat>) seatRepo.findAll();
    }

    public Optional<Seat> findOneSeat(int id) {
        return seatRepo.findById(id);
    }

}
