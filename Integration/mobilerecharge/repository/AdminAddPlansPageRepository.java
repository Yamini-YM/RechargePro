package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.AdminAddPlansPage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminAddPlansPageRepository extends JpaRepository<AdminAddPlansPage, String> {
    // You can add custom query methods if needed
}
