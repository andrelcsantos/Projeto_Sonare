var exercicioModel = require("../models/exercicioModel");

function salvar(req, res) {
  var fkUsuario = req.body.fk_usuarioServer;
  var fkInstrumento = req.body.fk_instrumentoServer;
  var tipoExercicio = req.body.tipo_exercicioServer;


if (fkUsuario == undefined ) {
      res.status(400).send("Seu usuário está undefined!");
    } else if (fkInstrumento == undefined) {
      res.status(400).send("Seu instrumento está indefinida!");
    } else if(tipoExercicio == undefined){
      res.status(400).send("O tipo do exercício não está definido!");
    } else {
      exercicioModel.salvar(fkUsuario, fkInstrumento, tipoExercicio)
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
                            dia: resultadoAutenticar[0].dia
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
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
  }

  module.exports = {
    salvar
}


