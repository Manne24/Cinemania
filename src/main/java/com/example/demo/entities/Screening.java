package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="screenings")
public class Screening {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int screening_id;
    private String date; //DATE
    private String time; //TIME or DATETIME ?
    private int film_id;
    private int salon_id;

    public Screening(){

    }

    public int getScreening_id() {
        return screening_id;
    }

    public void setScreening_id(int screening_id) {
        this.screening_id = screening_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getFilm_id() {
        return film_id;
    }

    public void setFilm_id(int film_id) {
        this.film_id = film_id;
    }

    public int getSalon_id() {
        return salon_id;
    }

    public void setSalon_id(int salon_id) {
        this.salon_id = salon_id;
    }
}
