package com.example.demo.repositories;

import com.example.demo.entities.Screening;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScreeningRepo extends CrudRepository<Screening,Integer> {
}
