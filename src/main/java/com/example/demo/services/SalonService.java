package com.example.demo.services;

import com.example.demo.entities.Salon;
import com.example.demo.entities.Seat;
import com.example.demo.repositories.SalonRepo;
import com.example.demo.repositories.SeatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SalonService {

    @Autowired
    SalonRepo salonRepo;

    public List<Salon> findAllSalons() {
        return (List<Salon>) salonRepo.findAll();
    }

    public Optional<Salon> findOneSalon(int id) {
        return salonRepo.findById(id);
    }


}
