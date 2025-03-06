-- Crear el esquema 'documents' si no existe
CREATE SCHEMA IF NOT EXISTS documents;

-- Crear las tablas dentro del esquema 'documents'
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

-- Otorgar privilegios al usuario 'admin' sobre el esquema y las tablas
GRANT ALL PRIVILEGES ON SCHEMA documents TO admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA documents TO admin;

--insertar datos

INSERT INTO documents.document_data (user_id, document_name, document_tags, file_size, file_type, minio_path)
VALUES 
(112121, 'contract.pdf', ARRAY['legal', '2025'], 204800, 'PDF', '/files/contracts/contract.pdf'),
(222121, 'presentation.pptx', ARRAY['slides', 'meeting'], 512000, 'PPTX', '/files/presentations/presentation.pptx'),
(333333, 'budget.xlsx', ARRAY['finance', 'Q1'], 102400, 'XLSX', '/files/finance/budget.xlsx'),
(443434, 'manual.pdf', ARRAY['guide', 'user'], 307200, 'PDF', '/files/manuals/manual.pdf'),
(598980, 'proposal.docx', ARRAY['business', 'offer'], 256000, 'DOCX', '/files/docs/proposal.docx'),
(633233, 'schedule.csv', ARRAY['calendar', 'tasks'], 51200, 'CSV', '/files/data/schedule.csv'),
(744232, 'notes.txt', ARRAY['meeting', 'summary'], 2048, 'TXT', '/files/notes/notes.txt'),
(809090, 'diagram.svg', ARRAY['design', 'workflow'], 153600, 'SVG', '/files/designs/diagram.svg'),
(910909, 'invoice_2025_03.pdf', ARRAY['billing', 'March'], 128000, 'PDF', '/files/invoices/invoice_2025_03.pdf'),
(103323, 'research_paper.docx', ARRAY['study', 'AI'], 768000, 'DOCX', '/files/research/research_paper.docx');

