/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "data_from_mcisoil",
    {
      deveui: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "sensors_places_type",
          key: "deveui"
        }
      },
      unitimestamp: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      soilHumidityV: {
        type: DataTypes.DOUBLE,
        allowNull: true
      }
    },
    {
      tableName: "data_from_mcisoil"
    }
  );
