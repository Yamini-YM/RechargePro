package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.UserUpiPage;
import com.example.mobilerecharge.service.UserUpiPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/upi")
public class UserUpiPageController {

    @Autowired
    private final UserUpiPageService userUpiPageService;

    public UserUpiPageController(UserUpiPageService userUpiPageService) {
        this.userUpiPageService = userUpiPageService;
    }

    @GetMapping
    public List<UserUpiPage> getAllUpiAccounts() {
        return userUpiPageService.getAllUpiAccounts();
    }

    @PostMapping
    public void addUserUpiAccount(@RequestBody UserUpiPage userUpiPage) {
        userUpiPageService.addUserUpiAccount(userUpiPage);
    }

    // You can add more endpoints for updating, deleting, or fetching a specific UPI account
}
