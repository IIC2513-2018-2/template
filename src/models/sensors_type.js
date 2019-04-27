/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  return sequelize.define(
    "sensors_type",
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      numeric_type: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      tableName: "sensors_type"
    }
  );
};
