var DataTypes = require("sequelize").DataTypes;
var _curso = require("./curso");
var _curso_has_profesor = require("./curso_has_profesor");
var _estudiante = require("./estudiante");
var _estudiante_has_curso = require("./estudiante_has_curso");
var _profesor = require("./profesor");

function initModels(sequelize) {
  var curso = _curso(sequelize, DataTypes);
  var curso_has_profesor = _curso_has_profesor(sequelize, DataTypes);
  var estudiante = _estudiante(sequelize, DataTypes);
  var estudiante_has_curso = _estudiante_has_curso(sequelize, DataTypes);
  var profesor = _profesor(sequelize, DataTypes);

  curso.belongsToMany(estudiante, { as: 'Estudiante_id_Estudiante_estudiantes', through: estudiante_has_curso, foreignKey: "Curso_id_Curso", otherKey: "Estudiante_id_Estudiante" });
  curso.belongsToMany(profesor, { as: 'Profesor_id_Profesor_profesors', through: curso_has_profesor, foreignKey: "Curso_id_Curso", otherKey: "Profesor_id_Profesor" });
  estudiante.belongsToMany(curso, { as: 'Curso_id_Curso_curso_estudiante_has_cursos', through: estudiante_has_curso, foreignKey: "Estudiante_id_Estudiante", otherKey: "Curso_id_Curso" });
  profesor.belongsToMany(curso, { as: 'Curso_id_Curso_cursos', through: curso_has_profesor, foreignKey: "Profesor_id_Profesor", otherKey: "Curso_id_Curso" });
  curso_has_profesor.belongsTo(curso, { as: "Curso_id_Curso_curso", foreignKey: "Curso_id_Curso"});
  curso.hasMany(curso_has_profesor, { as: "curso_has_profesors", foreignKey: "Curso_id_Curso"});
  estudiante_has_curso.belongsTo(curso, { as: "Curso_id_Curso_curso", foreignKey: "Curso_id_Curso"});
  curso.hasMany(estudiante_has_curso, { as: "estudiante_has_cursos", foreignKey: "Curso_id_Curso"});
  estudiante_has_curso.belongsTo(estudiante, { as: "Estudiante_id_Estudiante_estudiante", foreignKey: "Estudiante_id_Estudiante"});
  estudiante.hasMany(estudiante_has_curso, { as: "estudiante_has_cursos", foreignKey: "Estudiante_id_Estudiante"});
  curso_has_profesor.belongsTo(profesor, { as: "Profesor_id_Profesor_profesor", foreignKey: "Profesor_id_Profesor"});
  profesor.hasMany(curso_has_profesor, { as: "curso_has_profesors", foreignKey: "Profesor_id_Profesor"});

  return {
    curso,
    curso_has_profesor,
    estudiante,
    estudiante_has_curso,
    profesor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
