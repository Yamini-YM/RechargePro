package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class AdminAddAddonPlanPage {

    @Id
    private String addonName;
    private String description;
    private String amount;
    private String dataLimit;

   
}
