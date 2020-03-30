package com.example.demo.services;

import com.example.demo.entities.Film;
import com.example.demo.repositories.FilmRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FilmService {

    @Autowired
    private FilmRepo filmRepo;

    public List<Film> findAllFilms() {
        return (List<Film>) filmRepo.findAll();
    }


    public void updateFilm(Film film) {
    }

    public Film addNewFilm(Film film) {
        return filmRepo.save(film);
    }

    public void deleteById(int id) {
    }

    public Optional<Film> getOneFilm(int id) {
        return filmRepo.findById(id);
    }

}
