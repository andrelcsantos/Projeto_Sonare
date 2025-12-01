var express = require("express");
var router = express.Router();

var exercicioController = require("../controllers/exercicioController");

// router.post("/dadosExercicios"), function (req, res) {

// }

router.get("/diasConsecutivos/:fkUsuario", function (req, res) {
  exercicioController.diasConsecutivos(req, res);
});

router.post("/salvar", function (req, res) {
  exercicioController.salvar(req, res);
})

router.get("/acertos/:fkInstrumento", function (req, res) {
  exercicioController.acertos(req, res);
});

router.get("/erros/:fkInstrumento", function (req, res) {
  exercicioController.erros(req, res);
});

module.exports = router;