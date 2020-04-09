package com.example.demo.services;

import com.example.demo.entities.Screening;
import com.example.demo.repositories.ScreeningRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScreeningService {

    @Autowired
    ScreeningRepo screeningRepo;

   public List<Screening> findAllScreenings() {
       return (List<Screening>) screeningRepo.findAll();
   }

   public Optional<Screening> findOneScreening(int id) {
       return screeningRepo.findById(id);
   }

}
