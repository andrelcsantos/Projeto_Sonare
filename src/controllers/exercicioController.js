var exercicioModel = require("../models/exercicioModel");

function salvar(req, res) {
  var fkUsuario = req.body.fk_usuarioServer;
  var fkInstrumento = req.body.fk_instrumentoServer;
  var tipoExercicio = req.body.tipo_exercicioServer;
  var acertos = req.body.respostas_certasServer;
  var erros = req.body.respostas_erradasServer;


if (fkUsuario == undefined ) {
      res.status(400).send("Seu usuário está undefined!");
    } else if (fkInstrumento == undefined) {
      res.status(400).send("Seu instrumento está indefinida!");
    } else if(tipoExercicio == undefined){
      res.status(400).send("O tipo do exercício não está definido!");
    } else if(acertos == undefined){
        res.status(400).send("Os acertos não estão definidos!");
    } else if(erros == undefined){
        res.status(400).send("Os erros não estão definidos!");
    } else{
      exercicioModel.salvar(fkUsuario, fkInstrumento, tipoExercicio, acertos, erros)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        
                        res.json({
                            fkUsuario: resultadoAutenticar[0].fkUsuario,
                            fkInstrumento: resultadoAutenticar[0].fkInstrumento,
                            tipoExercicio: resultadoAutenticar[0].tipoExercicio,
                            acertos: resultadoAutenticar[0].acertos,
                            erros: resultadoAutenticar[0].erros
                        });
                    
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Falha insert exercicio");
                    } else {
                        res.status(403).send("falha no ex");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve ao inserir dados na tabela exercicio! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
  }

  function diasConsecutivos(req, res) {
    var fkUsuario = req.params.fkUsuario;

    exercicioModel.diasConsecutivos(fkUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            })
        .catch(
            function (erro) {
                console.log(
                    "Houve um erro ao buscar os dias consecutivos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function acertosAc(req, res) {
    var fkInstrumento = req.params.fkInstrumento;

    exercicioModel.acertosAc(fkInstrumento)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            })
        .catch(
            function (erro) {
                console.log(
                    "Houve um erro ao buscar acertos dos exercícios de Acordes dos instrumentos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function acertosNt(req, res) {
    var fkInstrumento = req.params.fkInstrumento;

    exercicioModel.acertosNt(fkInstrumento)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            })
        .catch(
            function (erro) {
                console.log(
                    "Houve um erro ao buscar acertos dos exercícios de Notas dos instrumentos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function errosAc(req, res) {
    var fkInstrumento = req.params.fkInstrumento;

    exercicioModel.errosAc(fkInstrumento)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            })
        .catch(
            function (erro) {
                console.log(
                    "Houve um erro ao buscar erros dos exercícios de Acordes dos instrumentos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function errosNt(req, res) {
    var fkInstrumento = req.params.fkInstrumento;

    exercicioModel.errosNt(fkInstrumento)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            })
        .catch(
            function (erro) {
                console.log(
                    "Houve um erro ao buscar erros dos exercícios de Notas dos instrumentos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}



  module.exports = {
    salvar,
    diasConsecutivos,
    acertosAc,
    acertosNt,
    errosAc,
    errosNt
}


