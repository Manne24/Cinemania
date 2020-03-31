package com.example.demo.configs;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.annotation.PostConstruct;

@Configuration
public class MyUserDetailsService implements UserDetailsService {

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public BCryptPasswordEncoder getEncoder() { return encoder; }

    @Autowired
    private UserRepo userRepo;


        @PostConstruct
        private void createDefaultUsers(){
            if (userRepo.findByEmail("johan@gmail.com") == null) {
                addUser("Johan","johan@gmail.com", "johan123");
            }
        }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found by email: " + email);
        }
        return toUserDetails(user);
    }

    public User addUser(String name, String email, String password){
        User user = new User(name, email, encoder.encode(password));
        try {
            return userRepo.save(user);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    private UserDetails toUserDetails(User user) {
        // If you have a User entity you have to
        // use the userdetails User for this to work
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles("USER").build();
    }
}