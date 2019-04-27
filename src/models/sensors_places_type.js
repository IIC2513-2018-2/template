/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  return sequelize.define(
    "sensors_places_type",
    {
      deveui: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      place_name: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: "clients_places",
          key: "place_name"
        }
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: "sensors_type",
          key: "type"
        }
      },
      sensor_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      appid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      data_rate: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      alarm_check: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      data_threshold: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: true
      }
    },
    {
      tableName: "sensors_places_type"
    }
  );
};
