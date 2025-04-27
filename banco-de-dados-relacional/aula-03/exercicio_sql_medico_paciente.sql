CREATE TABLE medicos
(
 crm NUMBER(5) NOT NULL,
 nome VARCHAR(100) NOT NULL,
 especialidade VARCHAR(100) NOT NULL,
 CONSTRAINT PK_medicos PRIMARY KEY (crm)
);
CREATE TABLE pacientes
(
 cpf VARCHAR(15) NOT NULL,
 nome VARCHAR(100) NOT NULL,
 sexo CHAR(1) NOT NULL,
 CONSTRAINT PK_pacientes PRIMARY KEY (cpf)
);
CREATE TABLE medicospacientes
(
crm NUMBER(5) NOT NULL,
cpf VARCHAR(15) NOT NULL,
CONSTRAINT FK_CRM FOREIGN KEY (crm) REFERENCES medicos(crm),
CONSTRAINT FK_CPF FOREIGN KEY (cpf) REFERENCES pacientes(cpf)
);
ALTER TABLE medicospacientes ADD CONSTRAINT PK_MEDPAC PRIMARY KEY (crm,cpf);
-- INSERCOES
INSERT INTO medicos VALUES (10,'Dr. Santos','Cardiologista');
INSERT INTO medicos VALUES (11,'Dra. Dora','Neurologista');
INSERT INTO pacientes VALUES ('501','Pedro','M');
INSERT INTO pacientes VALUES ('502','Ana','F');
INSERT INTO pacientes VALUES ('503','Carlos','M');
INSERT INTO medicospacientes VALUES (10,501);
INSERT INTO medicospacientes VALUES (10,503);
INSERT INTO medicospacientes VALUES (11,503);
INSERT INTO medicospacientes VALUES (9,9); -- erro
-- TABELA DE CONSULTAS
CREATE TABLE consultas
(
 crm NUMBER(5) NOT NULL,
 cpf VARCHAR(15) NOT NULL,
 data date NOT NULL,
 diagnostico VARCHAR(500) NULL,
CONSTRAINT FK_CONSCRM FOREIGN KEY (crm) REFERENCES medicos(crm),
CONSTRAINT FK_CONSCPF FOREIGN KEY (cpf) REFERENCES pacientes(cpf),
CONSTRAINT PK_CONS PRIMARY KEY (crm,data)
);
INSERT INTO consultas VALUES (10, '501', TO_DATE('10-12-2015 11:15','DD-MM-YYYY HH24:MI'), NULL );