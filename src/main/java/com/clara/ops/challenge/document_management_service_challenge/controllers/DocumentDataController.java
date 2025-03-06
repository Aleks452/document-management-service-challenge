package com.clara.ops.challenge.document_management_service_challenge.controllers;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import com.clara.ops.challenge.document_management_service_challenge.services.DocumentDataService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/documents")
public class DocumentDataController {

  @Autowired
  private PagedResourcesAssembler<DocumentDataResponseDTO> pagedResourcesAssembler;	
  
  @Autowired 
  private DocumentDataService documentDataService;

  @GetMapping
  public ResponseEntity<PagedModel<EntityModel<DocumentDataResponseDTO>>> getDataDocuments(@RequestParam(defaultValue = "0") int page,
		  																@RequestParam(defaultValue = "5") int size) {
    
	Page<DocumentDataResponseDTO> documentReponseDTOPage = documentDataService.getDataDocuments(page, size);  
    PagedModel<EntityModel<DocumentDataResponseDTO>> pagedModel = pagedResourcesAssembler.toModel(documentReponseDTOPage);
    return ResponseEntity.ok(pagedModel);
    
  }

  
  @PostMapping("/post")
  public String postDataDocuments(@RequestBody DocumentDataEntity documentDataEntity) {
    documentDataService.putDataDocuments(documentDataEntity);
    return "hola";
  }
}
