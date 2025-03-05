package com.clara.ops.challenge.document_management_service_challenge.controller;

import com.clara.ops.challenge.document_management_service_challenge.service.MinioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/minio")
public class MinioController {

  @Autowired private MinioService minioService;

  @PostMapping("/upload")
  public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
    try {
      minioService.createBucket();
      minioService.uploadFile(
          file.getOriginalFilename(), file.getInputStream(), file.getSize(), file.getContentType());
      return ResponseEntity.ok("Archivo subido exitosamente: " + file.getOriginalFilename());
    } catch (Exception e) {
      return ResponseEntity.status(500).body("Error: " + e.getMessage());
    }
  }
}
