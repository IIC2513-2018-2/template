/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "type_variable",
    {
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "sensors_type",
          key: "type"
        }
      },
      variable_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    },
    {
      tableName: "type_variable"
    }
  );
};
