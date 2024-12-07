package com.example.covoiturage.repository;

import com.example.covoiturage.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TripRepository extends JpaRepository<Trip, Long> {
    List<Trip> findByDestinationContainingIgnoreCase(String destination);
}
