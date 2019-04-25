/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "data_from_imetosClima2Decagon",
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
      batteryV: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      rainPessl: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      volumetricWaterContent: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      soilTemperatureC: {
        type: DataTypes.DOUBLE,
        allowNull: true
      }
    },
    {
      tableName: "data_from_imetosClima2Decagon"
    }
  );
