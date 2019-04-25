/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "data_from_libeliumTempSoil",
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
      temperatureC: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      humidityRH: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      pressurePa: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      battery: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      soilHumidityCb: {
        type: DataTypes.DOUBLE,
        allowNull: true
      }
    },
    {
      tableName: "data_from_libeliumTempSoil"
    }
  );
