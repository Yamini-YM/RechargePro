package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class AdminRegistrationPage {

    @Id
    private String adminName;
    private String adminEmail;
    private String adminPassword;
    private String confirmAdminPassword;
}
