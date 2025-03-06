package com.clara.ops.challenge.document_management_service_challenge.utils;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class StringArrayConverter implements AttributeConverter<String[], String> {
  
  @Override
  public String convertToDatabaseColumn(String[] attribute) {
    return attribute == null ? null : String.join(",", attribute);
  }

  @Override
  public String[] convertToEntityAttribute(String dbData) {
    return dbData == null || dbData.isEmpty() ? new String[] {} : dbData.split(",");
  }
}
