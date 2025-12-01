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
dia DATE DEFAULT(CURRENT_DATE),
tipo_exercicio VARCHAR(10),
respostas_certas INT,
respostas_erradas INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
FOREIGN KEY (fk_instrumento) REFERENCES instrumento(id_instrumento),
PRIMARY KEY (id_exercicio, fk_usuario, fk_instrumento));

SELECT SUM(respostas_certas) AS acertos FROM exercicio WHERE fk_instrumento = 3;

SELECT SUM(respostas_erradas) AS erros FROM exercicio WHERE fk_instrumento = 3;

SELECT * FROM exercicio;

DROP TABLE instrumento;
DROP TABLE exercicio;


INSERT INTO instrumento(id_instrumento, nome) VALUES 
(1, 'Baixo'),
(2, 'Violão'),
(3, 'Teclado');


INSERT INTO exercicio (fk_usuario, fk_instrumento, dia, tipo_exercicio) VALUES
(1, 1, '2025-01-15', 'acorde');

INSERT INTO resposta_exercicio (resposta_correta, fk_exercicio) VALUES
(0, 1),
(0, 1),
(1, 1),
(1, 1),
(0, 1);




