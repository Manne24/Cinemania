package com.example.demo.services;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public List<User> findAllUsers(){
        return (List<User>) userRepo.findAll();
    }

    public User findOneUser(int user_id){
        User user = userRepo.findById(user_id);
        if(user==null) return null;

        return user;
    }
}
