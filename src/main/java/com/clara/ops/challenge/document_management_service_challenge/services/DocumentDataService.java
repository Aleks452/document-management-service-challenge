package com.clara.ops.challenge.document_management_service_challenge.services;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import com.clara.ops.challenge.document_management_service_challenge.mappers.DocumentDataMapper;
import com.clara.ops.challenge.document_management_service_challenge.repositories.DocumentDataRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class DocumentDataService {

  @Autowired 
  private DocumentDataRepository documentDataRepository;
  
  @Autowired 
  private DocumentDataMapper documentDataMapper;
  

  public Page<DocumentDataResponseDTO> getDataDocuments(int page, int size) {
	
	Pageable pageable  = PageRequest.of(page, size, Sort.by("dateCreation").descending());  
    Page<DocumentDataEntity> documentData = documentDataRepository.findAll(pageable);
    
    List<DocumentDataResponseDTO> documentDTO = documentDataMapper
            .documentDataEntityListToDocumentDataReponseDTOList(documentData.getContent());
    
    return new PageImpl<>(documentDTO, pageable, documentData.getTotalElements());
  }

  public String putDataDocuments(DocumentDataEntity documentDataEntity) {
    documentDataRepository.save(documentDataEntity);
    return "sirve";
  }
}
