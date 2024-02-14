package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class ManageGiftsAndCouponsPage {

    @Id
    private int id;
    private String name;
    private String Discount;
    private String expirationDate;

   
}
