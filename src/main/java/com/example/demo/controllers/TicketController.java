package com.example.demo.controllers;

import com.example.demo.entities.Seat;
import com.example.demo.entities.Ticket;
import com.example.demo.services.SeatService;
import com.example.demo.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest")
public class TicketController {


    @Autowired
    TicketService ticketService;

    @GetMapping("/tickets")
    public List<Ticket> getAllTickets() {
        return ticketService.findAllTickets();
    }

    @GetMapping("/tickets/{ticket_id}")
    public Optional<Ticket> getOneTicket(@PathVariable int ticket_id) {
        return ticketService.findOneTicket(ticket_id);

    }

    @PostMapping("/tickets")
    public Ticket createNewTicket(@RequestBody Ticket ticket) {
        return ticketService.addNewTicket(ticket);
    }


}
