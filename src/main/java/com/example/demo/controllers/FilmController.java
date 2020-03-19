package com.example.demo.controllers;

import com.example.demo.entities.Film;
import com.example.demo.services.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class FilmController {

    @Autowired
    FilmService filmService;

    @GetMapping("/owners")
    public List<Film> getAllOwners() {
        return filmService.findAllOwners();
    }

    @GetMapping("/owners/email/{email}")
    public Film getAllOwnersEmail(@PathVariable String email) {
        return email.findOwnerByEmail(email);
    }

    @GetMapping("/owners/{id}")
    public Film getOneOwner(@PathVariable int id){
        return filmService.findOneOwner(id);
    }

    @PostMapping("/owners")
    public Film createNewOwner(@RequestBody Film film) {
        return filmService.addNewOwner(film);
    }

    @DeleteMapping("/owners/{id}")
    public String deleteOneOwner(@PathVariable int id) { /*PathVariable to get variable in route*/
        try {
            filmService.deleteById(id);
            return "Success";
        } catch (Exception e) {
            return "Failed";
        }
    }

    @PutMapping("/owners") /*Route*/
    public String updateOwner(@RequestBody Film film) {
        try {
            filmService.updateFilm(film);
            return "Success";
        } catch (Exception e) {
            return "Failed";
        }
    }




}
