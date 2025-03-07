package com.clara.ops.challenge.document_management_service_challenge.services;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataRequestDTO;
import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import com.clara.ops.challenge.document_management_service_challenge.exceptions.CriterialNotFoundException;
import com.clara.ops.challenge.document_management_service_challenge.mappers.DocumentDataMapper;
import com.clara.ops.challenge.document_management_service_challenge.repositories.DocumentDataRepository;
import com.clara.ops.challenge.document_management_service_challenge.specifications.DocumentDataSpecification;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DocumentDataService {

	@Autowired 
	private DocumentDataRepository documentDataRepository;

	@Autowired 
	private DocumentDataMapper documentDataMapper;

	// create logic to use get endpoint
	public Page<DocumentDataResponseDTO> getDataDocuments(String documentName, Integer userId, String [] documentTags, int page, int size) {
		
		// Implement pagination
		Pageable pageable  = PageRequest.of(page, size, Sort.by("dateCreation").descending());
		Specification<DocumentDataEntity> specification = DocumentDataSpecification.filterDocuments(documentName, userId);
		
		// create try to manage all exception types
		try {
			Page<DocumentDataEntity> documentData = documentDataRepository.findAll(specification, pageable);

			if (documentData.isEmpty()) {
				throw new CriterialNotFoundException("No documents found matching the criteria");
			}
			
			// convert using mapper
			List<DocumentDataResponseDTO> documentDTO = documentDataMapper
					.documentDataEntityListToDocumentDataReponseDTOList(documentData.getContent());

			return new PageImpl<>(documentDTO, pageable, documentData.getTotalElements());
		} catch (Exception e) {
			throw e;
		}
	}
		
	 @Transactional
	 public Integer uploadDocumentAsync(DocumentDataRequestDTO documentDataRequestDTO, String fileUrl) {
	        try {
	            

	            DocumentDataEntity documentEntity = new DocumentDataEntity();
	            documentEntity.setUserId(documentDataRequestDTO.getUserId());
	            documentEntity.setDocumentName(documentDataRequestDTO.getFile().getOriginalFilename());
	            documentEntity.setDocumentTags(documentDataRequestDTO.getDocumentTags());
	            documentEntity.setFileSize(documentDataRequestDTO.getFile().getSize());
	            documentEntity.setFileType(documentDataRequestDTO.getFile().getContentType());
	            documentEntity.setMinioPath(fileUrl); 
	            documentEntity.setDateCreation(LocalDateTime.now());

	            documentEntity = documentDataRepository.save(documentEntity);

	            // Devolver respuesta
	            return documentEntity.getDocumentId();
	        } 
	        catch (Exception e) {
	            throw new RuntimeException(e.getMessage());
	        }
	 }     
}
