package com.clara.ops.challenge.document_management_service_challenge.entities;

import com.clara.ops.challenge.document_management_service_challenge.utils.StringArrayConverter;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "document_data", schema = "documents")
public class DocumentDataEntity implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "document_id")
  private Integer documentId;

  @Column(name = "user_id")
  private Integer userId;

  @Column(name = "document_name")
  private String documentName;

  @Convert(converter = StringArrayConverter.class)
  @Column(name = "document_tags", columnDefinition = "TEXT")
  private String[] documentTags;

  @Column(name = "file_size")
  private Long fileSize;

  @Column(name = "file_type")
  private String fileType;

  @Column(name = "minio_path")
  private String minioPath;

  @Column(name = "created_at", nullable = false, updatable = false)
  private LocalDateTime dateCreation;
}
