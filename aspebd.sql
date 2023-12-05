
CREATE DATABASE aspebd.sql;

-- Conectar-se ao banco de dados
\c aspebd.sql;

-- Criar a tabela "Usuario"
CREATE TABLE Usuario (
    id serial PRIMARY KEY,
    login VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- Criar a tabela "Atendimento"
CREATE TABLE Atendimento (
    id serial PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula VARCHAR(20),
    curso VARCHAR(100),
    data_solicitacao DATE,
    solicitante VARCHAR(100),
    setor_solicitante VARCHAR(100),
    periodo VARCHAR(50),
    modalidade VARCHAR(50),
    ano INTEGER,
    relato_solicitacao TEXT,
    atendimento_assessoria_pedagogica TEXT,
    encaminhamento TEXT,
    id_usuario INTEGER REFERENCES Usuario(id)
);
