package com.example.mobilerecharge.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.mobilerecharge.dto.RegistrationPageDto;
import com.example.mobilerecharge.model.RegistrationPage;
import com.example.mobilerecharge.service.RegistrationDtoPageService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/regdto")

public class RegistrationDtoPageController {

    @Autowired
    private RegistrationDtoPageService userDtoService;

    @PostMapping("/post")
    public boolean addUser(@RequestBody RegistrationPage userReg) {        
        return userDtoService.addUser(userReg);
    }
    @GetMapping("/get")
    public List<RegistrationPageDto> getAllUsers() {
        return userDtoService.getAllUsers();
    }
    

    
}