# Cinemania
> Movie theater app.

## General info
Full stack application for a movie theater with focus on functionality.

## Screenshots
![](login.png)
![](seats.png)
![](films.png)

## Technologies
* Vue.js
* Java Spring Framework 4.0
* SQLite

## Setup
Executable JAR-file can be made on request. 

## Code Examples
`chooseSeat(seat) {
      console.log(seat.status);
      console.log("Counter: " + this.counter);
      console.log("Total Tickets: " + this.totalTickets);
      console.log("List ticket types: ");
      for (let listTicketType of this.listTicketTypes) {
        console.log(listTicketType);
      }
      if (this.counter < this.totalTickets) {
        if (seat.status === "available") {
          seat.status = "selected";
          this.counter += 1;
        } else if (seat.status === "selected") {
          seat.status = "available";
          this.counter -= 1;
        }
      } else {
        if (seat.status === "selected") {
          seat.status = "available";
          this.counter -= 1;
        }
      }
    }`

## Features
* Watch trailers and read descriptions about movies.  
* Check available screening times.
* Create a user account and login to reserve seats and book tickets.
* Add new films by searching on title, get info and trailer from API's.

## Status
Project is: _finished_

## Contact
Created by Alex, Chiharu, Emmanuel and Patrik - feel free to contact us!
