// models/User.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize"); // Your Sequelize configuration

const User = sequelize.define("User", {
  // Define columns (fields) for the users table
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true, // Adjust as needed (can be non-null if required)
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true, // Adjust as needed (can be non-null if required)
  },
  birthdate: {
    type: DataTypes.DATEONLY, // Use DATEONLY for birthdate (without time)
    allowNull: true, // Adjust as needed (can be non-null if required)
  },
  // Add more columns as needed
});

// Define associations (if any)
// For example, if a user has many posts:
// User.hasMany(Post);

module.exports = User;
