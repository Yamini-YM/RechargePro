package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.AdminAddAddonPlanPage;
import com.example.mobilerecharge.service.AdminAddAddonPlanPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin-addon-plans")
public class AdminAddAddonPlanPageController {

    @Autowired
    private final AdminAddAddonPlanPageService adminAddAddonPlanPageService;
    
    public AdminAddAddonPlanPageController(AdminAddAddonPlanPageService adminAddAddonPlanPageService) {
        this.adminAddAddonPlanPageService = adminAddAddonPlanPageService;
    }

    @GetMapping
    public ResponseEntity<List<AdminAddAddonPlanPage>> getAllAdminAddAddonPlans() {
        List<AdminAddAddonPlanPage> adminAddAddonPlans = adminAddAddonPlanPageService.getAllAdminAddAddonPlans();
        return new ResponseEntity<>(adminAddAddonPlans, HttpStatus.OK);
    }

    @GetMapping("/{addonName}")
    public ResponseEntity<AdminAddAddonPlanPage> getAdminAddAddonPlanById(@PathVariable String addonName) {
        return adminAddAddonPlanPageService.getAdminAddAddonPlanById(addonName)
                .map(adminAddAddonPlanPage -> new ResponseEntity<>(adminAddAddonPlanPage, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<AdminAddAddonPlanPage> saveAdminAddAddonPlan(@RequestBody AdminAddAddonPlanPage adminAddAddonPlanPage) {
        AdminAddAddonPlanPage savedAdminAddAddonPlanPage = adminAddAddonPlanPageService.saveAdminAddAddonPlan(adminAddAddonPlanPage);
        return new ResponseEntity<>(savedAdminAddAddonPlanPage, HttpStatus.CREATED);
    }

    @PutMapping("/{addonName}")
    public ResponseEntity<AdminAddAddonPlanPage> updateAdminAddAddonPlan(@PathVariable String addonName, @RequestBody AdminAddAddonPlanPage updatedAddonPlan) {
        AdminAddAddonPlanPage updatedAdminAddAddonPlan = adminAddAddonPlanPageService.updateAdminAddAddonPlan(addonName, updatedAddonPlan);
        if (updatedAdminAddAddonPlan != null) {
            return new ResponseEntity<>(updatedAdminAddAddonPlan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{addonName}")
    public ResponseEntity<Void> deleteAdminAddAddonPlan(@PathVariable String addonName) {
        adminAddAddonPlanPageService.deleteAdminAddAddonPlan(addonName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
