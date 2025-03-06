package com.clara.ops.challenge.document_management_service_challenge.exceptions;

public class DocumentNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public DocumentNotFoundException(String message) {
        super(message);
    }

}
