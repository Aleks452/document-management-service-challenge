package com.clara.ops.challenge.document_management_service_challenge.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataRequestDTO;
import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataResponseDTO;
import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import com.clara.ops.challenge.document_management_service_challenge.exceptions.CriterialNotFoundException;
import com.clara.ops.challenge.document_management_service_challenge.exceptions.FileSizeLimitExceededException;
import com.clara.ops.challenge.document_management_service_challenge.exceptions.InvalidFileFormatException;
import com.clara.ops.challenge.document_management_service_challenge.repositories.DocumentDataRepository;
import com.clara.ops.challenge.document_management_service_challenge.services.DocumentDataService;
import com.clara.ops.challenge.document_management_service_challenge.services.MinioService;

@SpringBootTest
@AutoConfigureMockMvc
public class DocumentDataControllerTest {


	@Mock
	private DocumentDataService documentDataService;

	@Mock
	private MinioService minioService;

	@Mock
	private DocumentDataRepository documentDataRepository;

	@Mock
	private PagedResourcesAssembler<DocumentDataResponseDTO> pagedResourcesAssembler;

	@InjectMocks
	private DocumentDataController documentDataController;

	
	// test to get paginated data
	@Test
	void getDataDocuments_Should_Return200AndValidateResponse() throws Exception {

		// Configure data to sent
		String documentName = "Document 1";
		Integer userId = 123;
		String[] documentTags = {"tag1", "tag2"};
		int page = 0;
		int size = 5;

		DocumentDataResponseDTO documentDTO = new DocumentDataResponseDTO();
		documentDTO.setDocumentName("Document 1");
		documentDTO.setDocumentId(1);
		documentDTO.setUserId(123);
		documentDTO.setFileSize(1024L);
		documentDTO.setFileType("pdf");
		documentDTO.setMinioPath("path/to/file");

		// Simulate response
		Page<DocumentDataResponseDTO> documentPage = new PageImpl<>(Arrays.asList(documentDTO), PageRequest.of(page, size), 1);
		
		when(documentDataService.getDataDocuments(documentName, userId, documentTags, page, size))
		.thenReturn(documentPage);

		PagedModel<EntityModel<DocumentDataResponseDTO>> pagedModel = PagedModel.of(Arrays.asList(EntityModel.of(documentDTO)),
				new PagedModel.PageMetadata(1, 0, 5));

		
		when(pagedResourcesAssembler.toModel(documentPage)).thenReturn(pagedModel);

		// Calling controller
		ResponseEntity<PagedModel<EntityModel<DocumentDataResponseDTO>>> response = documentDataController.getDataDocuments(page, size, documentName, userId, documentTags);

		// Verify 
		assertEquals(200, response.getStatusCodeValue());
		assertEquals("Document 1", response.getBody().getContent().iterator().next().getContent().getDocumentName());
	}

	// test to upload file in Minio
	@Test
    void uploadDocumentAsync_Should_Return201AndUploadFile() throws Exception {
		
        // configure data to sent
        Integer userId = 123;
        String[] documentTags = {"tag1", "tag2"};
        MultipartFile file = new MockMultipartFile("file", "document.pdf", "application/pdf", "content".getBytes());

        // Simulate behavior with asyncronus service
        CompletableFuture<String> uploadResult = CompletableFuture.completedFuture("userId/document.pdf");
        when(minioService.uploadDocumentAsync(any())).thenReturn(uploadResult);
        when(documentDataService.uploadDocumentAsync(any(), eq("userId/document.pdf"))).thenReturn(1);

        // Upload values
        ResponseEntity<String> response = documentDataController.uploadDocumentAsync(userId, documentTags, file);
        
        // Verify values
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertTrue(response.getBody().contains("Upload was successful"));
        
        // Verify minio charge
        verify(minioService).uploadDocumentAsync(any());
        verify(documentDataService, times(1)).uploadDocumentAsync(any(), eq("userId/document.pdf"));
    }

	
	// test to validate info in DB and generate link
	@Test
    void getDownloadLink_ShouldReturn200_WhenDocumentExists() {
        
		// configure data to sent
        Integer documentId = 1;
        String minioPath = "documents/test.pdf";
        String downloadUrl = "test.pdf";

        // Simulate document exist in BD
        DocumentDataEntity mockDocument = new DocumentDataEntity();
        mockDocument.setMinioPath(minioPath);
        when(documentDataRepository.findById(documentId)).thenReturn(Optional.of(mockDocument));

        // Simulate link
        when(minioService.getDownloadUrl(minioPath)).thenReturn(downloadUrl);

        ResponseEntity<String> response = documentDataController.getDownloadLink(documentId);

        // Verify values
        assertNotNull(response);
        assertEquals(200, response.getStatusCodeValue());  // Verifica que responde con 200 OK
        assertEquals(downloadUrl, response.getBody());  // Verifica que el contenido es el URL esperado

        // Verify methods
        verify(documentDataRepository, times(1)).findById(documentId);
        verify(minioService, times(1)).getDownloadUrl(minioPath);
    }


	// Test for criterial not found
	@Test
	void getDataDocuments_ShouldReturnCriterialNotFoundException() throws Exception {

		// Inject de values with random values
		Mockito.when(documentDataService.getDataDocuments(any(), eq(0) , any(), anyInt(), anyInt()))
		.thenThrow(new CriterialNotFoundException("No documents found matching the criteria"));

		CriterialNotFoundException exception = assertThrows(CriterialNotFoundException.class, () -> 
		documentDataService.getDataDocuments(any(), eq(0) , any(), anyInt(), anyInt()));

		// verify the values are matching
		assertEquals("No documents found matching the criteria", exception.getMessage());

	}


	// Method to get the values
	private DocumentDataRequestDTO createMockRequest(String fileName, String contentType, long size, String[] tags) {

		// Create a mock for Multipartfile
		MultipartFile mockFile = Mockito.mock(MultipartFile.class);
		Mockito.when(mockFile.getOriginalFilename()).thenReturn(fileName);
		Mockito.when(mockFile.getContentType()).thenReturn(contentType);
		Mockito.when(mockFile.getSize()).thenReturn(size);

		// Create DTO to simulate
		DocumentDataRequestDTO mockRequestDTO = Mockito.mock(DocumentDataRequestDTO.class);
		Mockito.when(mockRequestDTO.getUserId()).thenReturn(123);
		Mockito.when(mockRequestDTO.getDocumentTags()).thenReturn(tags);
		Mockito.when(mockRequestDTO.getFile()).thenReturn(mockFile);

		return mockRequestDTO;
	}

	// test for invalid document
	@Test
	void uploadDocumentAsync_ShouldReturnInvalidFileFormatException() throws Exception {

		// Implement method
		DocumentDataRequestDTO mockRequestDTO = createMockRequest("test.txt", "text/plain", 1024L, new String[]{"tag1", "tag2"});

		Mockito.when(minioService.uploadDocumentAsync(mockRequestDTO))
		.thenThrow(new InvalidFileFormatException("Only PDF files allowed to upload"));

		InvalidFileFormatException exception = assertThrows(InvalidFileFormatException.class, () -> 
		minioService.uploadDocumentAsync(mockRequestDTO));

		assertEquals("Only PDF files allowed to upload", exception.getMessage());

	}

	// test for File size
	@Test
	void uploadDocumentAsync_ShouldReturnFileSizeLimitExceededException() throws Exception {

		// Implement method
		DocumentDataRequestDTO mockRequestDTO = createMockRequest("test.pdf", "application/pdf", 524288001L, new String[]{"tag1", "tag2"});

		Mockito.when(minioService.uploadDocumentAsync(mockRequestDTO))
		.thenThrow(new FileSizeLimitExceededException("File size exceeds the 500MB limit."));

		FileSizeLimitExceededException exception = assertThrows(FileSizeLimitExceededException.class, () -> 
		minioService.uploadDocumentAsync(mockRequestDTO));

		assertEquals("File size exceeds the 500MB limit.", exception.getMessage());

	}

	// Test for criterial not found
	@Test
	void getDownloadLink_ShouldReturnCriterialNotFoundException() throws Exception {

		// Inject de values with random values
		Mockito.when(documentDataRepository.findById(eq(0)))
		.thenThrow(new CriterialNotFoundException("No documents found matching the criteria"));

		CriterialNotFoundException exception = assertThrows(CriterialNotFoundException.class, () -> 
		documentDataRepository.findById(eq(0)));

		// verify the values are matching
		assertEquals("No documents found matching the criteria", exception.getMessage());

	}

}

