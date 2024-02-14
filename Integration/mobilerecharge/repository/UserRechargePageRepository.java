package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.UserRechargePage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRechargePageRepository extends JpaRepository<UserRechargePage, String> {
    // You can add custom query methods if needed
}
