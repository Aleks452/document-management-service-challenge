package com.clara.ops.challenge.document_management_service_challenge.exceptions;

public class FileSizeLimitExceededException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public FileSizeLimitExceededException(String message) {
        super(message);
    }
}

