/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  return sequelize.define(
    "plagas",
    {
      campo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fecha_medicion: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      cuartel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nombre_plaga: {
        type: DataTypes.STRING,
        allowNull: false
      },
      codigo_trampa: {
        type: DataTypes.STRING,
        allowNull: true
      },
      latitud: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      longitud: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      severidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_excel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "excel",
          key: "id_excel"
        }
      }
    },
    {
      tableName: "plagas"
    }
  );
};
