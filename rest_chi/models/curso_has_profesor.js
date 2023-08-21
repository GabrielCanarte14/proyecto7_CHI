const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curso_has_profesor', {
    Curso_id_Curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'curso',
        key: 'id_Curso'
      }
    },
    Profesor_id_Profesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'profesor',
        key: 'id_Profesor'
      }
    }
  }, {
    sequelize,
    tableName: 'curso_has_profesor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Curso_id_Curso" },
          { name: "Profesor_id_Profesor" },
        ]
      },
      {
        name: "fk_Curso_has_Profesor_Profesor1_idx",
        using: "BTREE",
        fields: [
          { name: "Profesor_id_Profesor" },
        ]
      },
      {
        name: "fk_Curso_has_Profesor_Curso1_idx",
        using: "BTREE",
        fields: [
          { name: "Curso_id_Curso" },
        ]
      },
    ]
  });
};
