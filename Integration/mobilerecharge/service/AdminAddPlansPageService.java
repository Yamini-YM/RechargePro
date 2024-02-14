// AdminAddPlansPageService.java
package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.AdminAddPlansPage;
import com.example.mobilerecharge.repository.AdminAddPlansPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminAddPlansPageService {

    @Autowired
    private final AdminAddPlansPageRepository adminAddPlansPageRepository;

    public AdminAddPlansPageService(AdminAddPlansPageRepository adminAddPlansPageRepository) {
        this.adminAddPlansPageRepository = adminAddPlansPageRepository;
    }

    public List<AdminAddPlansPage> getAllAdminAddPlans() {
        return adminAddPlansPageRepository.findAll();
    }

    public Optional<AdminAddPlansPage> getAdminAddPlanById(String planName) {
        return adminAddPlansPageRepository.findById(planName);
    }

    public AdminAddPlansPage saveAdminAddPlan(AdminAddPlansPage adminAddPlansPage) {
        return adminAddPlansPageRepository.save(adminAddPlansPage);
    }

    public AdminAddPlansPage updateAdminAddPlan(String planName, AdminAddPlansPage updatedPlan) {
        Optional<AdminAddPlansPage> existingPlan = adminAddPlansPageRepository.findById(planName);
        if (existingPlan.isPresent()) {
            updatedPlan.setPlanName(planName);
            return adminAddPlansPageRepository.save(updatedPlan);
        }
        return null;
    }

    public void deleteAdminAddPlan(String planName) {
        adminAddPlansPageRepository.deleteById(planName);
    }
}
