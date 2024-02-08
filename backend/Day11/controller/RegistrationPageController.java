package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.RegistrationPage;
import com.example.mobilerecharge.service.RegistrationPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registration-pages")
public class RegistrationPageController {

    @Autowired
    private final RegistrationPageService registrationPageService;

    public RegistrationPageController(RegistrationPageService registrationPageService) {
        this.registrationPageService = registrationPageService;
    }

    @GetMapping
    public ResponseEntity<List<RegistrationPage>> getAllRegistrationPages() {
        List<RegistrationPage> registrationPages = registrationPageService.getAllRegistrationPages();
        return new ResponseEntity<>(registrationPages, HttpStatus.OK);
    }

    @GetMapping("/{fullName}")
    public ResponseEntity<RegistrationPage> getRegistrationPageById(@PathVariable String fullName) {
        return registrationPageService.getRegistrationPageById(fullName)
                .map(registrationPage -> new ResponseEntity<>(registrationPage, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public ResponseEntity<RegistrationPage> saveRegistrationPage(@RequestBody RegistrationPage registrationPage) {
        RegistrationPage savedRegistrationPage = registrationPageService.saveRegistrationPage(registrationPage);
        return new ResponseEntity<>(savedRegistrationPage, HttpStatus.CREATED);
    }

    @DeleteMapping("/{fullName}")
    public ResponseEntity<Void> deleteRegistrationPage(@PathVariable String fullName) {
        registrationPageService.deleteRegistrationPage(fullName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
