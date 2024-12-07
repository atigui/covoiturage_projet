package com.example.covoiturage.repository;

import com.example.covoiturage.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

