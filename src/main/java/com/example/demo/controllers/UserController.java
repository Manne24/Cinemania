
package com.example.demo.controllers;


import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> getAllUser(){
        return userService.findAllUsers();
    }

    @GetMapping("/users/{user_id}")
    public User getOneUser(@PathVariable int user_id){
        return userService.findOneUser(user_id);
    }

    @PostMapping("/users")
    public User createNewUser(@RequestBody User user){
        return userService.createNewUser(user);
    }

}
