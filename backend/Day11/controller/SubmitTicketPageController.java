package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.SubmitTicketPage;
import com.example.mobilerecharge.service.SubmitTicketPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/submit-ticket")
public class SubmitTicketPageController {

    @Autowired
    private final SubmitTicketPageService submitTicketPageService;
    
    public SubmitTicketPageController(SubmitTicketPageService submitTicketPageService) {
        this.submitTicketPageService = submitTicketPageService;
    }

    @GetMapping
    public List<SubmitTicketPage> getAllTickets() {
        return submitTicketPageService.getAllTickets();
    }

    @PostMapping
    public void submitTicket(@RequestBody SubmitTicketPage submitTicketPage) {
        submitTicketPageService.submitTicket(submitTicketPage);
    }

    // You can add more endpoints for updating, deleting, or fetching a specific ticket
}
