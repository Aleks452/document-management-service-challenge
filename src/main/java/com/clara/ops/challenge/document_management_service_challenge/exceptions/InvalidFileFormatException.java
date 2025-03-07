package com.clara.ops.challenge.document_management_service_challenge.exceptions;

public class InvalidFileFormatException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public InvalidFileFormatException(String message) {
		super(message);
	}
}
