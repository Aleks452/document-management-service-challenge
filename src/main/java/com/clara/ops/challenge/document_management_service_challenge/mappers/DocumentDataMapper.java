package com.clara.ops.challenge.document_management_service_challenge.mappers;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface DocumentDataMapper {

  DocumentDataMapper INSTANCE = Mappers.getMapper(DocumentDataMapper.class);

  DocumentDataResponseDTO documentDataToDocumentDataDTO(DocumentDataEntity documentDataEntity);

  // Mapeo de DocumentData a DocumentResponseDTO
  List<DocumentDataResponseDTO> documentDataEntityListToDocumentDataReponseDTOList(
      List<DocumentDataEntity> documentDataEntityList);
}
