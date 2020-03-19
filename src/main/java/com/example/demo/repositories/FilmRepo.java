package com.example.demo.repositories;

import com.example.demo.entities.Film;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilmRepo extends CrudRepository<Film, Integer> {
    public List<Film> findAllByDirector(String director);
}
