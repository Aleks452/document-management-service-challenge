package com.clara.ops.challenge.document_management_service_challenge.mappers;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface DocumentDataMapper {

  DocumentDataMapper INSTANCE = Mappers.getMapper(DocumentDataMapper.class);

  // Mapper of DocumentDataEntity to DocumentDataResponseDTO

  List<DocumentDataResponseDTO> documentDataEntityListToDocumentDataReponseDTOList(
      List<DocumentDataEntity> documentDataEntityList);
}
