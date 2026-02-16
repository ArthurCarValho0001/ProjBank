const { usuarios } = require("../../../baseDados/DBInicial");

exports.buscarTodos = () => {
  return usuarios;
};
