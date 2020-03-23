package com.example.demo.controllers;

import com.example.demo.entities.Film;
import com.example.demo.services.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest")
public class FilmController {

    @Autowired
    FilmService filmService;

    @GetMapping("/films")
    public List<Film> getAllOwners() {
        return filmService.findAllFilms();
    }

   /* @GetMapping("/owners/email/{email}")
    public Film getAllOwnersEmail(@PathVariable String email) {
        return email.findOwnerByEmail(email);
    }*/

    @GetMapping("/films/{id}")
    public Optional<Film> getOneFilm(@PathVariable int id){
        return filmService.getOneFilm(id);
    }

    /*@PostMapping("/films")
    public Film createNewFilm(@RequestBody Film film) {
        return filmService.addNewFilm(film);
    }*/

    @DeleteMapping("/films/{id}")
    public String deleteOneFilm(@PathVariable int id) { /*PathVariable to get variable in route*/
        try {
            filmService.deleteById(id);
            return "Success";
        } catch (Exception e) {
            return "Failed";
        }
    }

    @PutMapping("/films") /*Route*/
    public String updateFilm(@RequestBody Film film) {
        try {
            filmService.updateFilm(film);
            return "Success";
        } catch (Exception e) {
            return "Failed";
        }
    }




}
