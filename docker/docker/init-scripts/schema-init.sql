-- Create schema 'documents' if not exist
CREATE SCHEMA IF NOT EXISTS documents;

-- Create table 'documents'
CREATE TABLE IF NOT EXISTS documents.document_data (
    document_id SERIAL,
    user_id INT,
    document_name VARCHAR(255),
    document_tags TEXT[],
    file_size BIGINT,
    file_type VARCHAR(50),
    minio_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (document_id, user_id)
);

-- Giving access to schema and tables
GRANT ALL PRIVILEGES ON SCHEMA documents TO admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA documents TO admin;
