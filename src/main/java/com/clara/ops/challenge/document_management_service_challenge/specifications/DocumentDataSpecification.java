package com.clara.ops.challenge.document_management_service_challenge.specifications;

import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;
import org.springframework.data.jpa.domain.Specification;

public class DocumentDataSpecification {

  public static Specification<DocumentDataEntity> filterDocuments(
      String documentName, Integer userId) {
    return (root, query, criteriaBuilder) -> {
      // Filter for documentName
      Specification<DocumentDataEntity> spec = Specification.where(null);

      if (documentName != null && !documentName.isEmpty()) {
        spec =
            spec.and(
                (root1, query1, criteriaBuilder1) ->
                    criteriaBuilder1.like(root1.get("documentName"), "%" + documentName + "%"));
      }

      // Filter for userId
      if (userId != null) {
        spec =
            spec.and(
                (root1, query1, criteriaBuilder1) ->
                    criteriaBuilder1.equal(root1.get("userId"), userId));
      }

      return spec.toPredicate(root, query, criteriaBuilder);
    };
  }
}
