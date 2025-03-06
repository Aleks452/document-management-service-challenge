package com.clara.ops.challenge.document_management_service_challenge.repositories;

import com.clara.ops.challenge.document_management_service_challenge.entities.DocumentDataEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentDataRepository extends JpaRepository<DocumentDataEntity, Integer>, JpaSpecificationExecutor<DocumentDataEntity> {


}
