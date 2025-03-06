-- Crear el esquema 'documents' si no existe
CREATE SCHEMA IF NOT EXISTS documents;

-- Crear las tablas dentro del esquema 'documents'
CREATE TABLE IF NOT EXISTS document_data (
    document_id SERIAL PRIMARY KEY,
    user_id INT,
    document_name VARCHAR(255),
    document_tags TEXT[],
    file_size BIGINT,
    file_type VARCHAR(50),
    minio_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Otorgar privilegios al usuario 'admin' sobre el esquema y las tablas
GRANT ALL PRIVILEGES ON SCHEMA documents TO admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA documents TO admin;

-- Establecer el search_path para usar el esquema 'documents' por defecto
SET search_path TO documents, public;

--insertar datos

INSERT INTO document_data (user_id, document_name, document_tags, file_size, file_type, minio_path, created_at)
VALUES
(1, 'documento_1.pdf', ARRAY['tag1', 'tag2'], 500000, 'pdf', 'minio/path/documento_1.pdf', CURRENT_TIMESTAMP),
(2, 'documento_2.pdf', ARRAY['tag3', 'tag4'], 300000, 'pdf', 'minio/path/documento_2.pdf', CURRENT_TIMESTAMP),
(3, 'documento_3.pdf', ARRAY['tag1', 'tag3'], 700000, 'pdf', 'minio/path/documento_3.pdf', CURRENT_TIMESTAMP),
(4, 'documento_4.txt', ARRAY['tag2', 'tag5'], 150000, 'txt', 'minio/path/documento_4.txt', CURRENT_TIMESTAMP),
(5, 'documento_5.txt', ARRAY['tag1', 'tag4'], 120000, 'txt', 'minio/path/documento_5.txt', CURRENT_TIMESTAMP),
(6, 'documento_6.docx', ARRAY['tag3', 'tag2'], 250000, 'docx', 'minio/path/documento_6.docx', CURRENT_TIMESTAMP),
(7, 'documento_7.docx', ARRAY['tag4', 'tag5'], 450000, 'docx', 'minio/path/documento_7.docx', CURRENT_TIMESTAMP),
(8, 'documento_8.xls', ARRAY['tag1', 'tag3'], 600000, 'xls', 'minio/path/documento_8.xls', CURRENT_TIMESTAMP),
(9, 'documento_9.xls', ARRAY['tag2', 'tag4'], 350000, 'xls', 'minio/path/documento_9.xls', CURRENT_TIMESTAMP),
(10, 'documento_10.pdf', ARRAY['tag5', 'tag1'], 800000, 'pdf', 'minio/path/documento_10.pdf', CURRENT_TIMESTAMP);
