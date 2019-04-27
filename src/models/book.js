module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name can't be empty"
          }
        }
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Author can't be empty"
          }
        }
      }
    },
    {}
  );
  return book;
};
