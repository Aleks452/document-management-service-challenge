package com.clara.ops.challenge.document_management_service_challenge.dtos;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class DocumentDataResponseDTO {

  private Integer documentId;
  private Integer userId;
  private String documentName;
  private String[] documentTags;
  private Long fileSize;
  private String fileType;
  private String minioPath;
  private LocalDateTime dateCreation;
}
