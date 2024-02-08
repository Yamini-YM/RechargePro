package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class UserDebitCardPage{

    @Id
    private String debitCardNumber;
    private String cardHolderName;
    private String debitCardExpiry;
    private String debitCardCVV;
    private String couponCode;
    
}
