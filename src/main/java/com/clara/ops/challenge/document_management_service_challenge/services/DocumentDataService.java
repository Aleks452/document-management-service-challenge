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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

  @Autowired private DocumentDataRepository documentDataRepository;

  @Autowired private DocumentDataMapper documentDataMapper;

  private static final Logger logger = LoggerFactory.getLogger(DocumentDataService.class);

  // create logic to use get endpoint
  public Page<DocumentDataResponseDTO> getDataDocuments(
      String documentName, Integer userId, String[] documentTags, int page, int size) {

    logger.info("Starting process to get data using filters");
    // Implement pagination
    Pageable pageable = PageRequest.of(page, size, Sort.by("dateCreation").descending());
    Specification<DocumentDataEntity> specification =
        DocumentDataSpecification.filterDocuments(documentName, userId);

    // create try to manage all exception types
    try {
      Page<DocumentDataEntity> documentData =
          documentDataRepository.findAll(specification, pageable);

      if (documentData.isEmpty()) {
        throw new CriterialNotFoundException("No documents found matching the criteria");
      }

      // convert using mapper
      List<DocumentDataResponseDTO> documentDTO =
          documentDataMapper.documentDataEntityListToDocumentDataReponseDTOList(
              documentData.getContent());

      logger.info("Data was generated successfully");
      return new PageImpl<>(documentDTO, pageable, documentData.getTotalElements());
    } catch (Exception e) {
      logger.error(e.getMessage());
      throw e;
    }
  }

  // inserting values in table if upload was successfully
  @Transactional
  public Integer uploadDocumentAsync(
      DocumentDataRequestDTO documentDataRequestDTO, String fileUrl) {
    try {

      logger.info("Starting process to insert data");
      DocumentDataEntity documentEntity = new DocumentDataEntity();
      documentEntity.setUserId(documentDataRequestDTO.getUserId());
      documentEntity.setDocumentName(documentDataRequestDTO.getFile().getOriginalFilename());
      documentEntity.setDocumentTags(documentDataRequestDTO.getDocumentTags());
      documentEntity.setFileSize(documentDataRequestDTO.getFile().getSize());
      documentEntity.setFileType(documentDataRequestDTO.getFile().getContentType());
      documentEntity.setMinioPath(fileUrl);
      documentEntity.setDateCreation(LocalDateTime.now());

      documentEntity = documentDataRepository.save(documentEntity);

      logger.info("Values was inserted successfully");
      return documentEntity.getDocumentId();
    } catch (Exception e) {
      logger.info(e.getMessage());
      throw new RuntimeException(e.getMessage());
    }
  }
}
