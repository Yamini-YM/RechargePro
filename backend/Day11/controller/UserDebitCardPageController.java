package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.UserDebitCardPage;
import com.example.mobilerecharge.service.UserDebitCardPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/debit-card")
public class UserDebitCardPageController {

    @Autowired
    private final UserDebitCardPageService userDebitCardPageService;

    public UserDebitCardPageController(UserDebitCardPageService userDebitCardPageService) {
        this.userDebitCardPageService = userDebitCardPageService;
    }

    @GetMapping
    public List<UserDebitCardPage> getAllDebitCards() {
        return userDebitCardPageService.getAllDebitCards();
    }

    @PostMapping
    public void addUserDebitCard(@RequestBody UserDebitCardPage userDebitCardPage) {
        userDebitCardPageService.addUserDebitCard(userDebitCardPage);
    }

    // You can add more endpoints for updating, deleting, or fetching a specific debit card
}
