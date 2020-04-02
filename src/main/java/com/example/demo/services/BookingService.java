package com.example.demo.services;

import com.example.demo.entities.Booking;
import com.example.demo.repositories.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    BookingRepo bookingRepo;

    public List<Booking> findAllBookings() {
        return (List<Booking>) bookingRepo.findAll();
    }

    public Optional<Booking> findOneBooking(int booking_id) {
        return bookingRepo.findById(booking_id);
    }

    public Booking addNewBooking(Booking booking) {
        return bookingRepo.save(booking);
    }
}
