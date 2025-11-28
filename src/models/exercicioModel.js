var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// function cadastrar(empresaId, descricao) {
  
//   var instrucaoSql = `INSERT INTO (descricao, fk_empresa) exercicio VALUES (${descricao}, ${empresaId})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// } 

function salvar(fkUsuario, fkInstrumento, tipoExercicio) {
  var instrucaoSql = `INSERT INTO (fk_usuario, fk_instrumento, tipo_exercicio) exercicio VALUES (${fkUsuario}, ${fkInstrumento}, ${tipoExercicio})`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.salvar(instrucaoSql);
}


module.exports = {
  salvar
}
