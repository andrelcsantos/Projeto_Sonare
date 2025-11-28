var express = require("express");
var router = express.Router();

var exercicioController = require("../controllers/exercicioController");

router.post("/dadosExercicios"), function (req, res) {

}

router.get("/:empresaId", function (req, res) {
  exercicioModel.buscarAquariosPorEmpresa(req, res);
});

router.post("/salvar", function (req, res) {
  exercicioController.salvar(req, res);
})

module.exports = router;