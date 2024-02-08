package com.example.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerecharge.model.LoginPage;
import com.example.mobilerecharge.service.LoginPageService;

@RestController
@CrossOrigin(origins="https://localhost:3000/")
public class LoginPageController {

    @Autowired

    public LoginPageService service;
    @PostMapping("/login")
    public LoginPage postDetails(@RequestBody LoginPage login){
        return service.addDetails(login);
    }

}