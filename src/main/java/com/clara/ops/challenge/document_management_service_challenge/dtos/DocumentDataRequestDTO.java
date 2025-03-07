package com.clara.ops.challenge.document_management_service_challenge.dtos;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class DocumentDataRequestDTO {
	
	private Integer userId;
	private String[] documentTags;
	private MultipartFile file;

}
