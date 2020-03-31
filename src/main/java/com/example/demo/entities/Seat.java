package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="seats")
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seat_id;
    private String name;
    private int row;
    private int salon_id;

    @Transient
    private String status;

    public Seat(){
        this.status = "available";
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getSeat_id() {
        return seat_id;
    }

    public void setSeat_id(int seat_id) {
        this.seat_id = seat_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getSalon_id() {
        return salon_id;
    }

    public void setSalon_id(int salon_id) {
        this.salon_id = salon_id;
    }
}
