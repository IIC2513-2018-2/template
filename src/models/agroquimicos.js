/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  return sequelize.define(
    "agroquimicos",
    {
      campo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cuartel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fecha_aplicacion: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      nombre_comercial: {
        type: DataTypes.STRING,
        allowNull: false
      },
      componente_activo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      unidad_medida: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cantidad_100l: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      mojamiento: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      dosis: {
        type: DataTypes.DOUBLE,
        allowNull: true
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
      tableName: "agroquimicos"
    }
  );
};
