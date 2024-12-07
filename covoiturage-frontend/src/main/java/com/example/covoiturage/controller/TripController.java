package com.example.covoiturage.controller;

import com.example.covoiturage.model.Trip;
import com.example.covoiturage.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
public class TripController {

    @Autowired
    private TripRepository tripRepository;

    @GetMapping
    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }

    @PostMapping
    public Trip createTrip(@RequestBody Trip trip) {
        // Assume user is authenticated and we set the driver here
        return tripRepository.save(trip);
    }

    @GetMapping("/search")
    public List<Trip> searchTrips(@RequestParam String destination) {
        return tripRepository.findByDestinationContainingIgnoreCase(destination);
    }

    @PostMapping("/{id}/join")
    public Trip joinTrip(@PathVariable Long id) {
        // Implement logic to join a trip
        // This is a simplified version and doesn't handle errors or full seats
        Trip trip = tripRepository.findById(id).orElseThrow();
        trip.setAvailableSeats(trip.getAvailableSeats() - 1);
        return tripRepository.save(trip);
    }
}

