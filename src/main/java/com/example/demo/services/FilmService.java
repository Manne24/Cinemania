package com.example.demo.services;

import com.example.demo.entities.Film;
import com.example.demo.repositories.FilmRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    @Autowired
    private FilmRepo filmRepo;

    public List<Film> findAllFilms() {
        return (List<Film>) filmRepo.findAll();
    }


    public void updateFilm(Film film) {
    }

    public void addNewFilm(Film film) {
    }

    public void deleteById(int id) {
    }

    /*public Film findOneFilm(int id) {
    }*/
}
