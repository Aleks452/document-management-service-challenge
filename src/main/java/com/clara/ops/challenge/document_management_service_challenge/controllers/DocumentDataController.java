package com.clara.ops.challenge.document_management_service_challenge.controllers;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import com.clara.ops.challenge.document_management_service_challenge.services.DocumentDataService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/documents")
public class DocumentDataController {

  @Autowired private DocumentDataService documentDataService;

  @GetMapping
  public List<DocumentDataResponseDTO> getDataDocuments() {
    return documentDataService.getDataDocuments();
  }

  @PostMapping("/post")
  public String postDataDocuments(@RequestBody DocumentDataEntity documentDataEntity) {
    documentDataService.putDataDocuments(documentDataEntity);
    return "hola";
  }
}
