package com.email.apiEmail.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class SendMail {
	
	@Autowired
    private EmailService emailService;
	
	@PostMapping("/sendMail")	
    public void sendEmail(@RequestBody DataDTO dataDTO) {
        emailService.sendEmail(dataDTO);
        emailService.sendEmailClient(dataDTO);
    }
}


