package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.UserDebitCardPage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDebitCardPageRepository extends JpaRepository<UserDebitCardPage, String> {
    // You can add custom query methods if needed
}
