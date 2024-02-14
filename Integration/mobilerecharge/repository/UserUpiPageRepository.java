package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.UserUpiPage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserUpiPageRepository extends JpaRepository<UserUpiPage, String> {
    // You can add custom query methods if needed
}
