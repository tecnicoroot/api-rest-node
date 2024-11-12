CREATE TABLE dbcopa.selecoes (
	id INT auto_increment NOT NULL,
	selecao varchar(25) NOT NULL,
	grupo CHAR(1) NOT NULL,
	CONSTRAINT selecoes_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;
