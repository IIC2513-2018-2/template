/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "excel",
    {
      id_excel: {
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
      link: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_subida: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "subida",
          key: "id_subida"
        }
      },
      validez: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      tableName: "excel"
    }
  );
};
