package com.example.covoiturage.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String contenu;
    
    @ManyToOne
    private User expediteur;
    
    @ManyToOne
    private User destinataire;
    
    private Date dateEnvoi;
}

