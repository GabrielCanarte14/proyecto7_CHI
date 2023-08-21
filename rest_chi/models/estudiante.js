const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estudiante', {
    id_Estudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'estudiante',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_Estudiante" },
        ]
      },
      
    ]
  });
};
