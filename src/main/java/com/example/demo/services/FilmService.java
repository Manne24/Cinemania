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

    public Film updateFilm(Film film) {
        return filmRepo.save(film);
    }

    public Film addNewFilm(Film film) {
        return filmRepo.save(film);
    }

    /*public void deleteById(int film_id) {
        filmRepo.deleteById(film_id);
    }*/

    public Optional<Film> getOneFilm(long id) {
        return filmRepo.findById(id);
    }

    public Long removeFilm(String title) {
        return filmRepo.deleteByTitle(title);
    }
}
