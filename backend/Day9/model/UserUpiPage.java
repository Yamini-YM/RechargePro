package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class UserUpiPage{

    @Id
    private String upiId;
    private String upiPin;
    private String couponCode;
    
}
