package com.example.covoiturage.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.EqualsAndHashCode;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity
public class Conducteur extends User {
    @OneToMany(mappedBy = "conducteur")
    private List<Trajet> trajets;
}

