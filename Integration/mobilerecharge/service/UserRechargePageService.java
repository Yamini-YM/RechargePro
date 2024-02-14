package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.UserRechargePage;
import com.example.mobilerecharge.repository.UserRechargePageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserRechargePageService {

    @Autowired
    private final UserRechargePageRepository userRechargePageRepository;

    public UserRechargePageService(UserRechargePageRepository userRechargePageRepository) {
        this.userRechargePageRepository = userRechargePageRepository;
    }

    public List<UserRechargePage> getAllRecharges() {
        return userRechargePageRepository.findAll();
    }

    public void rechargeUserAccount(UserRechargePage userRechargePage) {
        userRechargePageRepository.save(userRechargePage);
    }

    // You can add more methods for updating, deleting, or fetching a specific recharge
}
