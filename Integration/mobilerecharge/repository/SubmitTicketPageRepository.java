package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.SubmitTicketPage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmitTicketPageRepository extends JpaRepository<SubmitTicketPage, String> {
    // You can add custom query methods if needed
}
