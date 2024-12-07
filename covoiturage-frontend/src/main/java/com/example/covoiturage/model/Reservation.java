package com.example.covoiturage.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    private Trajet trajet;
    
    @ManyToOne
    private Passager passager;
    
    private String statut;
}

