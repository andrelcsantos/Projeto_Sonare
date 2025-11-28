CREATE DATABASE sonare;
USE sonare;

CREATE TABLE usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (45),
email VARCHAR (55),
senha VARCHAR (55));

CREATE TABLE instrumento (
id_instrumento INT PRIMARY KEY,
nome VARCHAR(10));

CREATE TABLE exercicio (
id_exercicio INT AUTO_INCREMENT,
fk_usuario INT,
fk_instrumento INT,
dia DATE,
tipo_exercicio VARCHAR(6),
FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
FOREIGN KEY (fk_instrumento) REFERENCES instrumento(id_instrumento),
PRIMARY KEY (id_exercicio, fk_usuario, fk_instrumento));

CREATE TABLE resposta_exercicio (
id_resposta INT AUTO_INCREMENT,
resposta_correta BOOLEAN,
fk_exercicio INT,
FOREIGN KEY (fk_exercicio) REFERENCES exercicio(id_exercicio),
PRIMARY KEY(id_resposta, fk_exercicio));

DROP TABLE instrumento;
DROP TABLE exercicio;
DROP TABLE resposta_exercicio;

INSERT INTO instrumento(id_instrumento, nome) VALUES 
(1, 'Baixo'),
(2, 'Violão'),
(3, 'Teclado');

INSERT INTO usuario (nome, email, senha) VALUES 
('Luis', 'luis@gmail.com', '123456');

INSERT INTO exercicio (fk_usuario, fk_instrumento, dia, tipo_exercicio) VALUES
(1, 1, '2025-01-15', 'acorde');

INSERT INTO resposta_exercicio (resposta_correta, fk_exercicio) VALUES
(0, 1),
(0, 1),
(1, 1),
(1, 1),
(0, 1);

SELECT i.nome, tipo_exercicio, resposta_correta 
FROM exercicio
	JOIN instrumento i
		ON fk_instrumento = id_instrumento
	JOIN resposta_exercicio 
		ON fk_exercicio = id_exercicio;
        




