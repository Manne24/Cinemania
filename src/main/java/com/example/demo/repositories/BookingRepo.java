package com.example.demo.repositories;

import com.example.demo.entities.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepo extends CrudRepository<Booking, Integer> {
   /* public Booking deleteById(int booking_id);*/
}
