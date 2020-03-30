package com.example.demo.repositories;

import com.example.demo.entities.Salon;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalonRepo extends CrudRepository<Salon, Integer> {
}
