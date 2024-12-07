package com.example.covoiturage.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String adresse;
    private Date dateNaiss;
    private String photo;
    private Boolean musique;
    private Integer nbPlaces;
    private String voiture;
    
    @OneToOne(mappedBy = "profile")
    private User user;
}

