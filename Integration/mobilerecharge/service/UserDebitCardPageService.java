package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.UserDebitCardPage;
import com.example.mobilerecharge.repository.UserDebitCardPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDebitCardPageService {

    @Autowired
    private final UserDebitCardPageRepository userDebitCardPageRepository;

    public UserDebitCardPageService(UserDebitCardPageRepository userDebitCardPageRepository) {
        this.userDebitCardPageRepository = userDebitCardPageRepository;
    }

    public List<UserDebitCardPage> getAllDebitCards() {
        return userDebitCardPageRepository.findAll();
    }

    public void addUserDebitCard(UserDebitCardPage userDebitCardPage) {
        userDebitCardPageRepository.save(userDebitCardPage);
    }

    // You can add more methods for updating, deleting, or fetching a specific debit card
}
