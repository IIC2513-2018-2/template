/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  return sequelize.define(
    "produccion",
    {
      id_data: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      fecha_fin: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      campo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cuartel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      especie: {
        type: DataTypes.STRING,
        allowNull: false
      },
      variedad: {
        type: DataTypes.STRING,
        allowNull: true
      },
      produccion_total: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      produccion_area: {
        type: DataTypes.DOUBLE,
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
      tableName: "produccion"
    }
  );
};
