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
) AS dias`
;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function acertosAc(fkInstrumento, fkUsuario) {
  var instrucaoSql = `
  SELECT SUM(respostas_certas) AS total_acertos_ac FROM exercicio WHERE fk_instrumento = ${fkInstrumento} AND tipo_exercicio = 'Acordes' AND fk_usuario = ${fkUsuario};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function acertosNt(fkInstrumento, fkUsuario) {
  var instrucaoSql = `
  SELECT SUM(respostas_certas) AS total_acertos_nt FROM exercicio WHERE fk_instrumento = ${fkInstrumento} AND tipo_exercicio = 'Notas' AND fk_usuario = ${fkUsuario};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function errosAc(fkInstrumento, fkUsuario) {
  var instrucaoSql = `
  SELECT SUM(respostas_erradas) AS total_erros_ac FROM exercicio WHERE fk_instrumento = ${fkInstrumento} AND tipo_exercicio = 'Acordes' AND fk_usuario = ${fkUsuario};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function errosNt(fkInstrumento, fkUsuario) {
  var instrucaoSql = `
  SELECT SUM(respostas_erradas) AS total_erros_nt FROM exercicio WHERE fk_instrumento = ${fkInstrumento} AND tipo_exercicio = 'Notas' AND fk_usuario = ${fkUsuario};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  salvar,
  diasConsecutivos,
  acertosAc,
  acertosNt,
  errosAc,
  errosNt
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
