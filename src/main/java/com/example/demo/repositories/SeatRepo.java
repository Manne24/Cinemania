package com.example.demo.repositories;

import com.example.demo.entities.Seat;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepo extends CrudRepository<Seat, Integer> {
}
