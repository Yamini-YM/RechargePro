package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class UserRechargePage{

    @Id
    private String userName;
    private String mobileNumber;
    private String amount;
    
    
}
