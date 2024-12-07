package com.example.covoiturage.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
public class Trajet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String pointDepart;
    private String destination;
    private String heureDepart;
    private Integer nbPlaces;
    
    @ManyToOne
    private Conducteur conducteur;
    
    @OneToMany(mappedBy = "trajet")
    private List<Reservation> reservations;
}

