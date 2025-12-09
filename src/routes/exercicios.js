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

router.get("/acertosAc/:fkInstrumento/:fkUsuario", function (req, res) {
  exercicioController.acertosAc(req, res);
});

router.get("/acertosNt/:fkInstrumento/:fkUsuario", function (req, res) {
  exercicioController.acertosNt(req, res);
});

router.get("/errosAc/:fkInstrumento/:fkUsuario", function (req, res) {
  exercicioController.errosAc(req, res);
});

router.get("/errosNt/:fkInstrumento/:fkUsuario", function (req, res) {
  exercicioController.errosNt(req, res);
});

module.exports = router;