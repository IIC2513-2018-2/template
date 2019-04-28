/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "test_data_from_rhf1s001",
    {
      deveui: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
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
      }
    },
    {
      tableName: "test_data_from_rhf1s001"
    }
  );
};
