const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estudiante_has_curso', {
    Estudiante_id_Estudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'estudiante',
        key: 'id_Estudiante'
      }
    },
    Curso_id_Curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'curso',
        key: 'id_Curso'
      }
    }
  }, {
    sequelize,
    tableName: 'estudiante_has_curso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Estudiante_id_Estudiante" },
          { name: "Curso_id_Curso" },
        ]
      },
      {
        name: "fk_Estudiante_has_Curso_Curso1_idx",
        using: "BTREE",
        fields: [
          { name: "Curso_id_Curso" },
        ]
      },
      {
        name: "fk_Estudiante_has_Curso_Estudiante_idx",
        using: "BTREE",
        fields: [
          { name: "Estudiante_id_Estudiante" },
        ]
      },
    ]
  });
};
