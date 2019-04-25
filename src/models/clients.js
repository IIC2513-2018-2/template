/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "clients",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      }
    },
    {
      // tableName: "clients",
      timestamps: false
    },{
  });
 
