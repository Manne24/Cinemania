package com.example.demo.repositories;

import com.example.demo.entities.Film;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.sql.DataTruncation;
import java.util.List;

@Repository
public interface FilmRepo extends CrudRepository<Film, Long> {
    public List<Film> findAllByDirector(String director);

    @Transactional
    public Long deleteByTitle(@Param("title") String title);
}
