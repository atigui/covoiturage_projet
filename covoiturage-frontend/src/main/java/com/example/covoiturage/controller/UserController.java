package com.example.covoiturage.controller;

import com.example.covoiturage.model.User;
import com.example.covoiturage.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PutMapping("/profile")
    public User updateProfile(@RequestBody User user) {
        // Assume user is authenticated and we have their ID
        return userRepository.save(user);
    }

    @PostMapping("/profile/picture")
    public String uploadProfilePicture(@RequestParam("file") MultipartFile file) throws IOException {
        // Assume user is authenticated and we have their ID
        String fileName = "user_" + 1 + "_" + file.getOriginalFilename();
        Path path = Paths.get("uploads/" + fileName);
        Files.write(path, file.getBytes());
        return fileName;
    }
}

