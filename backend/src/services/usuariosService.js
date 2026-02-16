const usuariosRepository = require("../repositories/usuariosRepository");

exports.listar = () => {
  return usuariosRepository.buscarTodos();
};
