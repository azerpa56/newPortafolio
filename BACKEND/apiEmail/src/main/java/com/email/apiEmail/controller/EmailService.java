package com.email.apiEmail.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender emailSender;
	
    public void sendEmailClient(DataDTO dataDTO) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(dataDTO.getEmail());
        message.setSubject("Hello " + dataDTO.getName() + ". This is our Contact Email");
        message.setText("Your Message, is recived.");
        emailSender.send(message);
    }
    
    public void sendEmail(DataDTO dataDTO) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("abreumanuel999@gmail.com");
        message.setSubject("Hello " + dataDTO.getName() + " this user wants to contact you");
        message.setText("My Name is: " + dataDTO.getName() + "\nPhone: " + dataDTO.getPhone() + "\nMessage: " + dataDTO.getMsg());
        emailSender.send(message);
    }
}

