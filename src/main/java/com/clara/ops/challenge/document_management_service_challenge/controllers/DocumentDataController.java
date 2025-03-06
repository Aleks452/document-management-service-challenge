package com.clara.ops.challenge.document_management_service_challenge.controllers;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import com.clara.ops.challenge.document_management_service_challenge.services.DocumentDataService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

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
@Tag(name = "Document Management", description = "API to documents management.")
public class DocumentDataController {

  @Autowired
  private PagedResourcesAssembler<DocumentDataResponseDTO> pagedResourcesAssembler;	
  
  @Autowired 
  private DocumentDataService documentDataService;
  
  // API documentation
  @Operation(
	        summary = "Get documents.",
	        description = "This endpoint allows you to obtain documents filtered by name, user and tags with pagination."
	    )
  @GetMapping
  public ResponseEntity<PagedModel<EntityModel<DocumentDataResponseDTO>>> getDataDocuments(@RequestParam(defaultValue = "0") int page,
		  																				   @RequestParam(defaultValue = "5") int size,
		  																				   @RequestParam(required = false) String documentName,
		  																				   @RequestParam(required = false) Integer userId,
		  																				   @RequestParam(required = false) String [] documentTags) {
    
	Page<DocumentDataResponseDTO> documentReponseDTOPage = documentDataService.getDataDocuments(documentName, userId, documentTags, page, size);  
    PagedModel<EntityModel<DocumentDataResponseDTO>> pagedModel = pagedResourcesAssembler.toModel(documentReponseDTOPage);
    return ResponseEntity.ok(pagedModel);
    
  }

  
  @PostMapping("/post")
  public String postDataDocuments(@RequestBody DocumentDataEntity documentDataEntity) {
    documentDataService.putDataDocuments(documentDataEntity);
    return "hola";
  }
}
