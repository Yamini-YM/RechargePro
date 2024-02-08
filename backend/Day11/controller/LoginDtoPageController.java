package com.example.mobilerecharge.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.mobilerecharge.service.LoginDtoPageService;
import com.example.mobilerecharge.model.LoginPage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/logindto")
public class LoginDtoPageController {

    @Autowired
    private LoginDtoPageService userDtoService;

    @PostMapping("/post")
    public boolean addUser(@RequestBody LoginPage userlog) {        
        return userDtoService.addUser(userlog);
    }
    
}