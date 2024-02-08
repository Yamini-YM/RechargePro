package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.AdminAddPlansPage;
import com.example.mobilerecharge.service.AdminAddPlansPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/plans")
public class AdminAddPlansPageController {

    @Autowired
    private final AdminAddPlansPageService adminAddPlansPageService;
    
    public AdminAddPlansPageController(AdminAddPlansPageService adminAddPlansPageService) {
        this.adminAddPlansPageService = adminAddPlansPageService;
    }

    @GetMapping
    public List<AdminAddPlansPage> getAllPlans() {
        return adminAddPlansPageService.getAllPlans();
    }

    @PostMapping
    public void addPlan(@RequestBody AdminAddPlansPage adminAddPlansPage) {
        adminAddPlansPageService.addPlan(adminAddPlansPage);
    }

    // You can add more endpoints for updating, deleting, or fetching a specific plan
}
