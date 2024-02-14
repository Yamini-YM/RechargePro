package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor

public class AdminAddPlansPage {
    @Id
    private String planName;
    private String planAmount;
    private String planValidity;

}
