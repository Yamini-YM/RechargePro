package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class SubmitTicketPage{

    @Id
    private String subject;
    private String description;
    private String contactMethod;
    private String contactInfo;
    
}
