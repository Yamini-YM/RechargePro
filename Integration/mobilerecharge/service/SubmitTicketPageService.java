package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.SubmitTicketPage;
import com.example.mobilerecharge.repository.SubmitTicketPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubmitTicketPageService {

    @Autowired
    private final SubmitTicketPageRepository submitTicketPageRepository;

    public SubmitTicketPageService(SubmitTicketPageRepository submitTicketPageRepository) {
        this.submitTicketPageRepository = submitTicketPageRepository;
    }

    public List<SubmitTicketPage> getAllTickets() {
        return submitTicketPageRepository.findAll();
    }

    public void submitTicket(SubmitTicketPage submitTicketPage) {
        submitTicketPageRepository.save(submitTicketPage);
    }

    // You can add more methods for updating, deleting, or fetching a specific ticket
}
