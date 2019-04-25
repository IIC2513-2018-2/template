/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "data_from_davisVantagePro2SantaJulia",
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
      rainAccpPeriod: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      uvIndex: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      radiationPower: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      windkmh: {
        type: DataTypes.DOUBLE,
        allowNull: true
      }
    },
    {
      tableName: "data_from_davisVantagePro2SantaJulia"
    }
  );
