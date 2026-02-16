const usuariosService = require("../services/usuariosService");

exports.listarUsuarios = (req, res) => {
  const usuarios = usuariosService.listar();
  return res.json(usuarios);
};
