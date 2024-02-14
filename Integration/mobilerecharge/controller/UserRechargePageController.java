package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.UserRechargePage;
import com.example.mobilerecharge.service.UserRechargePageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/user/recharge")
public class UserRechargePageController {

    @Autowired
    private final UserRechargePageService userRechargePageService;
    
    public UserRechargePageController(UserRechargePageService userRechargePageService) {
        this.userRechargePageService = userRechargePageService;
    }

    @GetMapping("/get")
    public List<UserRechargePage> getAllRecharges() {
        return userRechargePageService.getAllRecharges();
    }

    @PostMapping("/add")
    public void rechargeUserAccount(@RequestBody UserRechargePage userRechargePage) {
        userRechargePageService.rechargeUserAccount(userRechargePage);
    }

    // You can add more endpoints for updating, deleting, or fetching a specific recharge
}
