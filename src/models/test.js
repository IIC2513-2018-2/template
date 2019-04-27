/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  return sequelize.define(
    "test",
    {
      column1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      column2: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      tableName: "test"
    }
  );
};
