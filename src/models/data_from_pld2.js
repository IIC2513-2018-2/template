/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "data_from_pld2",
    {
      deveui: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
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
      temperaturec: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      depthm: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      batteryv: {
        type: DataTypes.DOUBLE,
        allowNull: true
      }
    },
    {
      tableName: "data_from_pld2"
    }
  );
