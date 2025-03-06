package com.clara.ops.challenge.document_management_service_challenge.dtos;

import java.time.LocalDateTime;

import com.clara.ops.challenge.document_management_service_challenge.validations.MandatoryFirstValidation;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class DocumentDataRequestDTO {

	@NotNull(groups = {MandatoryFirstValidation.class})
	@PositiveOrZero(groups = {MandatoryFirstValidation.class})
	private Integer userId;
	
	private String documentName;
	
	@NotNull(groups = {MandatoryFirstValidation.class})
	@NotBlank(groups = {MandatoryFirstValidation.class})
	private String[] documentTags;
	private Long fileSize;
	private String fileType;
	private String minioPath;
	private LocalDateTime dateCreation;

}
