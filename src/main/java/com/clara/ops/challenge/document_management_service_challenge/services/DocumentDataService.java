package com.clara.ops.challenge.document_management_service_challenge.services;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import com.clara.ops.challenge.document_management_service_challenge.mappers.DocumentDataMapper;
import com.clara.ops.challenge.document_management_service_challenge.repositories.DocumentDataRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentDataService {

  @Autowired private DocumentDataRepository documentDataRepository;

  public List<DocumentDataResponseDTO> getDataDocuments() {
    List<DocumentDataEntity> documentData = documentDataRepository.findAll();
    return DocumentDataMapper.INSTANCE.documentDataEntityListToDocumentDataReponseDTOList(
        documentData);
  }

  public String putDataDocuments(DocumentDataEntity documentDataEntity) {
    documentDataRepository.save(documentDataEntity);
    return "sirve";
  }
}
