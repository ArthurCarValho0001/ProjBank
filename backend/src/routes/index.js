const { Router } = require("express");
const usuariosController = require("../controllers/usuariosController");

const routes = Router();

routes.get("/usuarios", usuariosController.listarUsuarios);

routes.get("/status", (req, res) => {
  return res.json({ status: "ok" });
});

module.exports = routes;
