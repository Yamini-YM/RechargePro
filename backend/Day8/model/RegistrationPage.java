package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class RegistrationPage {

    @Id
    private String fullName;
    private String email;
    private String password;
    private String confirmPassword;
    private String mobileNumber;
}
