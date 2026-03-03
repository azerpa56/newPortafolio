package com.email.apiEmail.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SendMail {

    private final EmailService emailService;

    public SendMail(EmailService emailService) {
        this.emailService = emailService;
    }

    @CrossOrigin(origins = "${app.cors.allowed-origin}")
	@PostMapping("/sendMail")	
    public ResponseEntity<Map<String, String>> sendEmail(@RequestBody DataDTO dataDTO) {
        if (isBlank(dataDTO.getName()) || isBlank(dataDTO.getEmail()) || isBlank(dataDTO.getMsg())) {
            return ResponseEntity.badRequest().body(Map.of(
                    "status", "error",
                    "message", "name, email y msg son obligatorios"
            ));
        }

        try {
            emailService.sendContactEmails(dataDTO);
            return ResponseEntity.ok(Map.of(
                    "status", "ok",
                    "message", "Correo enviado correctamente"
            ));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                    "status", "error",
                    "message", "No se pudo enviar el correo"
            ));
        }
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }
}


