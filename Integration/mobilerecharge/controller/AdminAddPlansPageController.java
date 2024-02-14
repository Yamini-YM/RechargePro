// AdminAddPlansPageController.java
package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.AdminAddPlansPage;
import com.example.mobilerecharge.service.AdminAddPlansPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin-plans")
public class AdminAddPlansPageController {

    private final AdminAddPlansPageService adminAddPlansPageService;

    @Autowired
    public AdminAddPlansPageController(AdminAddPlansPageService adminAddPlansPageService) {
        this.adminAddPlansPageService = adminAddPlansPageService;
    }

    @GetMapping
    public ResponseEntity<List<AdminAddPlansPage>> getAllPlans() {
        List<AdminAddPlansPage> plans = adminAddPlansPageService.getAllAdminAddPlans();
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> addPlan(@RequestBody AdminAddPlansPage adminAddPlansPage) {
        adminAddPlansPageService.saveAdminAddPlan(adminAddPlansPage);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{planName}")
    public ResponseEntity<AdminAddPlansPage> getPlanByName(@PathVariable String planName) {
        AdminAddPlansPage plan = adminAddPlansPageService.getAdminAddPlanById(planName).orElse(null);
        return plan != null ? new ResponseEntity<>(plan, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{planName}")
    public ResponseEntity<Void> updatePlan(@PathVariable String planName, @RequestBody AdminAddPlansPage updatedPlan) {
        AdminAddPlansPage updated = adminAddPlansPageService.updateAdminAddPlan(planName, updatedPlan);
        return updated != null ? new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{planName}")
    public ResponseEntity<Void> deletePlan(@PathVariable String planName) {
        adminAddPlansPageService.deleteAdminAddPlan(planName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
