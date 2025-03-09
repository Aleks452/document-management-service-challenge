package com.clara.ops.challenge.document_management_service_challenge.services;

import com.clara.ops.challenge.document_management_service_challenge.dtos.DocumentDataRequestDTO;
import io.minio.BucketExistsArgs;
import io.minio.GetPresignedObjectUrlArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.http.Method;
import java.io.InputStream;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class MinioService {

  @Autowired private MinioClient minioClient;

  @Value("${minio.bucket-name}")
  private String bucketName;

  public MinioService(MinioClient minioClient) {
    this.minioClient = minioClient;
  }

  private static final Logger logger = LoggerFactory.getLogger(MinioService.class);

  // method to upload data
  @Async
  public CompletableFuture<String> uploadDocumentAsync(
      DocumentDataRequestDTO documentDataRequestDTO) {

    return CompletableFuture.supplyAsync(
        () -> {
          try {

            logger.info("Executing thread: " + Thread.currentThread().getName());

            String fileName =
                documentDataRequestDTO.getUserId()
                    + "/"
                    + documentDataRequestDTO.getFile().getOriginalFilename();
            MultipartFile file = documentDataRequestDTO.getFile();

            // Verify if the bucket was created
            boolean found =
                minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
            if (!found) {
              minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
            }

            // upload file on Minio
            try (InputStream inputStream = file.getInputStream()) {
              minioClient.putObject(
                  PutObjectArgs.builder().bucket(bucketName).object(fileName).stream(
                          inputStream, file.getSize(), 5 * 1024 * 1024) // Carga en chunks de 5MB
                      .contentType(file.getContentType())
                      .build());

              logger.info("File was uploaded successfully");
            }

            // Get url to upload in table
            return fileName;

          } catch (Exception e) {
            logger.error("Error:" + e.getMessage());
            throw new RuntimeException(e.getMessage());
          }
        });
  }

  // method to create link
  public String getDownloadUrl(String minioPath) {
    try {

      logger.info("Starting link creation for download fles");
      return minioClient.getPresignedObjectUrl(
          GetPresignedObjectUrlArgs.builder()
              .bucket(bucketName)
              .object(minioPath)
              .method(Method.GET)
              .expiry(10, TimeUnit.MINUTES)
              .build());

    } catch (Exception e) {
      logger.error(e.getMessage());
      throw new RuntimeException(e.getMessage());
    }
  }
}
