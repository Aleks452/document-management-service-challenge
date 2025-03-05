package com.clara.ops.challenge.document_management_service_challenge.service;

import io.minio.*;
import java.io.InputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MinioService {

  @Autowired private MinioClient minioClient;

  private final String bucketName = "test-bucket";

  public void createBucket() throws Exception {
    boolean bucketExists =
        minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
    if (!bucketExists) {
      minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
      System.out.println("✅ Bucket creado: " + bucketName);
    }
  }

  public void uploadFile(String fileName, InputStream inputStream, long size, String contentType)
      throws Exception {
    minioClient.putObject(
        PutObjectArgs.builder().bucket(bucketName).object(fileName).stream(inputStream, size, -1)
            .contentType(contentType)
            .build());
    System.out.println("✅ Archivo subido: " + fileName);
  }
}
