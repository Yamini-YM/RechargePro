package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.UserUpiPage;
import com.example.mobilerecharge.repository.UserUpiPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserUpiPageService {

    @Autowired
    private final UserUpiPageRepository userUpiPageRepository;
    
    public UserUpiPageService(UserUpiPageRepository userUpiPageRepository) {
        this.userUpiPageRepository = userUpiPageRepository;
    }

    public List<UserUpiPage> getAllUpiAccounts() {
        return userUpiPageRepository.findAll();
    }

    public void addUserUpiAccount(UserUpiPage userUpiPage) {
        userUpiPageRepository.save(userUpiPage);
    }

    // You can add more methods for updating, deleting, or fetching a specific UPI account
}
