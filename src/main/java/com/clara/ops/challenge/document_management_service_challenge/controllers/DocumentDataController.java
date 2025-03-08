package com.clara.ops.challenge.document_management_service_challenge.controllers;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataRequestDTO;
import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.exceptions.CriterialNotFoundException;
import com.clara.ops.challenge.document_management_service_challenge.exceptions.FileSizeLimitExceededException;
import com.clara.ops.challenge.document_management_service_challenge.exceptions.InvalidFileFormatException;
import com.clara.ops.challenge.document_management_service_challenge.repositories.DocumentDataRepository;
import com.clara.ops.challenge.document_management_service_challenge.services.DocumentDataService;
import com.clara.ops.challenge.document_management_service_challenge.services.MinioService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/documents")
@Tag(name = "Document Management", description = "API to documents management.")
public class DocumentDataController {

  @Autowired
  private PagedResourcesAssembler<DocumentDataResponseDTO> pagedResourcesAssembler;	
  
  @Autowired 
  private DocumentDataService documentDataService;
  
  @Autowired
  private MinioService minioService;
  
  @Autowired
  private DocumentDataRepository documentDataRepository;
  
  // API documentation
  
  // Get documentation endpoint
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

  // upload documents
  @Operation(
	        summary = "Upload documents.",
	        description = "This endpoint allows you to upload documents in Minio."
	    )
  @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<String> uploadDocumentAsync(@RequestParam("userId") @NotNull @Positive Integer userId,
	        					@RequestParam("documentTags") @NotNull @NotEmpty String[] documentTags,
		  						@RequestParam("file") @NotNull MultipartFile file
		  						) throws InterruptedException, ExecutionException {
	  
	  if (!file.getContentType().equalsIgnoreCase("application/pdf")) {
			throw new InvalidFileFormatException("Only PDF files allowed to upload");
		}
	  
	  if (file.getSize() > 500L * 1024 * 1024) {
          throw new FileSizeLimitExceededException("File size exceeds the 500MB limit.");
      }
	  
	  DocumentDataRequestDTO documentDataRequestDTO = new DocumentDataRequestDTO(userId, documentTags, file);
	  CompletableFuture<String> uploadResult = minioService.uploadDocumentAsync(documentDataRequestDTO);
	  Integer documentId = documentDataService.uploadDocumentAsync(documentDataRequestDTO, uploadResult.get());
	  
	  return ResponseEntity.status(HttpStatus.CREATED).body("Upload was successful, the generated ID for this document is: "  + documentId);
    		  
  }
  
  @Operation(
	        summary = "Download documents.",
	        description = "This endpoint generate a link to download files."
	    )
  @GetMapping("/download/{documentId}")
  public ResponseEntity<String> getDownloadLink(@PathVariable Integer documentId) {
	  return documentDataRepository.findById(documentId)
			  .map(document -> ResponseEntity.ok(minioService.getDownloadUrl(document.getMinioPath())))
			  .orElseThrow(() -> new CriterialNotFoundException("No documents found matching the criteria"));
  }
  
}
