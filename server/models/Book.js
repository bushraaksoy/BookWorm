const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize"); // Your Sequelize configuration

const Book = sequelize.define("Book", {
  // Define columns (fields) for the books table
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more columns as needed
});

// Define associations (if any)
// For example, if a book belongs to a user:
// Book.belongsTo(User);

module.exports = Book;
