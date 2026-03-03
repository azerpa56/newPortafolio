package com.email.apiEmail.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender emailSender;
    private final String fromAddress;
    private final String ownerAddress;

    public EmailService(
            JavaMailSender emailSender,
            @Value("${app.mail.from}") String fromAddress,
            @Value("${app.mail.owner}") String ownerAddress
    ) {
        this.emailSender = emailSender;
        this.fromAddress = fromAddress;
        this.ownerAddress = ownerAddress;
    }

    public void sendContactEmails(DataDTO dataDTO) {
        sendEmailToOwner(dataDTO);
        sendEmailToClient(dataDTO);
    }

    private void sendEmailToClient(DataDTO dataDTO) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromAddress);
        message.setTo(dataDTO.getEmail());
        message.setSubject("Hola " + dataDTO.getName() + ", recibimos tu mensaje");
        message.setText("Gracias por escribirnos. Te responderemos pronto.");
        emailSender.send(message);
    }

    private void sendEmailToOwner(DataDTO dataDTO) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromAddress);
        message.setTo(ownerAddress);
        message.setReplyTo(dataDTO.getEmail());
        message.setSubject("Nuevo contacto desde el portfolio: " + dataDTO.getName());
        message.setText(
                "Nombre: " + dataDTO.getName()
                + "\nEmail: " + dataDTO.getEmail()
                + "\nTeléfono: " + dataDTO.getPhone()
                + "\n\nMensaje:\n" + dataDTO.getMsg()
        );
        emailSender.send(message);
    }
}

