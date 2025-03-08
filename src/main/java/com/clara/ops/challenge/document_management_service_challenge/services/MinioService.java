package com.clara.ops.challenge.document_management_service_challenge.services;


import java.io.InputStream;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataRequestDTO;

import io.minio.BucketExistsArgs;
import io.minio.GetPresignedObjectUrlArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.http.Method;


@Service
public class MinioService {

	@Autowired
	private MinioClient minioClient;

	@Value("${minio.bucket-name}")
	private String bucketName;

	public MinioService(MinioClient minioClient) {
		this.minioClient = minioClient;
	}

	@Async
	public CompletableFuture<String> uploadDocumentAsync(DocumentDataRequestDTO documentDataRequestDTO) {
		return CompletableFuture.supplyAsync(() -> {
			try {
				System.out.println("Ejecutando en hilo: " + Thread.currentThread().getName());
				String fileName = documentDataRequestDTO.getUserId() + "/" + documentDataRequestDTO.getFile().getOriginalFilename();
				MultipartFile file = documentDataRequestDTO.getFile();

				// Verificar si el bucket existe
				boolean found = minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
				if (!found) {
					minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
				}

				// Subir archivo a MinIO
				try (InputStream inputStream = file.getInputStream()) {
					minioClient.putObject(
							PutObjectArgs.builder()
							.bucket(bucketName)
							.object(fileName)
							.stream(inputStream, file.getSize(), 5 * 1024 * 1024) // Carga en chunks de 5MB
							.contentType(file.getContentType())
							.build()
							);
				}

				// Generar URL de MinIO
				return fileName;

			} catch (Exception e) {
				throw new RuntimeException("Error uploading file", e);
			}
		});
	}
	
	
	public String getDownloadUrl(String minioPath) {
        try {
        	return minioClient.getPresignedObjectUrl(
        		    GetPresignedObjectUrlArgs.builder()
        		        .bucket(bucketName)
        		        .object(minioPath)
        		        .method(Method.GET) 
        		        .expiry(10, TimeUnit.MINUTES)
        		        .build()
        		);
        } catch (Exception e) {
            throw new RuntimeException("Error generating download link", e);
        }
    }
	
}   
