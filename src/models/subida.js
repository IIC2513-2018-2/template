/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  return sequelize.define(
    "subida",
    {
      id_subida: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn("now")
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      variable: {
        type: DataTypes.STRING,
        allowNull: false
      },
      campo: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: "subida"
    }
  );
};
