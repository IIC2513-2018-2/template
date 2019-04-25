/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "clients_places",
    {
      place_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      client_name: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: "clients",
          key: "name"
        }
      },
      polygon: {
        type: DataTypes.ENUM(),
        allowNull: true
      }
    },
    {
      tableName: "clients_places"
    }
  );
