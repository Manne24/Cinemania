package com.example.demo.services;

import com.example.demo.configs.MyUserDetailsService;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;
    @Autowired
    private MyUserDetailsService myUserDetailsService;

    public List<User> findAllUsers(){
        return (List<User>) userRepo.findAll();
    }

    public User findOneUser(int user_id){
        User user = userRepo.findById(user_id);
        if(user==null) return null;

        return user;
    }

    public User findCurrentUser() {
        // the login session is stored between page reloads,
        // and we can access the current authenticated user with this
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepo.findByEmail(email);
    }

    public User registerUser(User user) {
        return myUserDetailsService.addUser(user.getName(), user.getEmail(), user.getPassword());
    }
}
