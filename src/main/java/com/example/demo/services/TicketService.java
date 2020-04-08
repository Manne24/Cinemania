package com.example.demo.services;

import com.example.demo.entities.Ticket;
import com.example.demo.repositories.TicketRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {
    @Autowired
    TicketRepo ticketRepo;


    public List<Ticket> findAllTickets() {
        return (List<Ticket>) ticketRepo.findAll();
    }

    public Optional<Ticket> findOneTicket(int id) {
        return ticketRepo.findById(id);
    }


    public Ticket addNewTicket(Ticket ticket) {
        return ticketRepo.save(ticket);
    }

    public Ticket removeTicket(int ticket_id) {
        ticketRepo.deleteById(ticket_id);
        return null;
    }

}
