var database = require("../database/config");

function salvar(fkUsuario, fkInstrumento, tipoExercicio, acertos, erros) {
  var instrucaoSql = `
  INSERT INTO exercicio(fk_usuario, fk_instrumento, tipo_exercicio, respostas_certas, respostas_erradas) 
  VALUES (${fkUsuario}, ${fkInstrumento}, '${tipoExercicio}', ${acertos}, ${erros})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function diasConsecutivos(fkUsuario){
  var instrucaoSql = `
  SELECT COUNT(*) AS dias_consecutivos
FROM (
    SELECT DISTINCT dia
    FROM exercicio
    WHERE fk_usuario = ${fkUsuario}
    ORDER BY dia DESC
) AS dias
WHERE DATEDIFF(CURDATE(), dia) <= (
    SELECT COUNT(*)
    FROM (
        SELECT DISTINCT dia
        FROM exercicio
        WHERE fk_usuario = ${fkUsuario}
    ) AS total_dias
)`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function acertos(fkInstrumento) {
  var instrucaoSql = `
  SELECT SUM(respostas_certas) AS total_acertos FROM exercicio WHERE fk_instrumento = ${fkInstrumento};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function erros(fkInstrumento) {
  var instrucaoSql = `
  SELECT SUM(respostas_erradas) AS total_erros FROM exercicio WHERE fk_instrumento = ${fkInstrumento};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  salvar,
  diasConsecutivos,
  acertos,
  erros
}

// function buscarAquariosPorEmpresa(empresaId) {

//   var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }

// function cadastrar(empresaId, descricao) {
  
//   var instrucaoSql = `INSERT INTO (descricao, fk_empresa) exercicio VALUES (${descricao}, ${empresaId})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// } 
