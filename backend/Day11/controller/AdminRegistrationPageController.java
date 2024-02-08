package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.AdminRegistrationPage;
import com.example.mobilerecharge.service.AdminRegistrationPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin-registration-pages")
public class AdminRegistrationPageController {

    @Autowired
    private final AdminRegistrationPageService adminRegistrationPageService;
    
    public AdminRegistrationPageController(AdminRegistrationPageService adminRegistrationPageService) {
        this.adminRegistrationPageService = adminRegistrationPageService;
    }

    @GetMapping
    public ResponseEntity<List<AdminRegistrationPage>> getAllAdminRegistrationPages() {
        List<AdminRegistrationPage> adminRegistrationPages = adminRegistrationPageService.getAllAdminRegistrationPages();
        return new ResponseEntity<>(adminRegistrationPages, HttpStatus.OK);
    }

    @GetMapping("/{adminName}")
    public ResponseEntity<AdminRegistrationPage> getAdminRegistrationPageById(@PathVariable String adminName) {
        return adminRegistrationPageService.getAdminRegistrationPageById(adminName)
                .map(adminRegistrationPage -> new ResponseEntity<>(adminRegistrationPage, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public ResponseEntity<AdminRegistrationPage> saveAdminRegistrationPage(@RequestBody AdminRegistrationPage adminRegistrationPage) {
        AdminRegistrationPage savedAdminRegistrationPage = adminRegistrationPageService.saveAdminRegistrationPage(adminRegistrationPage);
        return new ResponseEntity<>(savedAdminRegistrationPage, HttpStatus.CREATED);
    }

    @DeleteMapping("/{adminName}")
    public ResponseEntity<Void> deleteAdminRegistrationPage(@PathVariable String adminName) {
        adminRegistrationPageService.deleteAdminRegistrationPage(adminName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
