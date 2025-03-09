package com.clara.ops.challenge.document_management_service_challenge.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@Getter
@Setter
public class DocumentDataRequestDTO {

  private Integer userId;
  private String[] documentTags;
  private MultipartFile file;
}
