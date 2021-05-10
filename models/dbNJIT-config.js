require("dotenv").config();

module.exports = {
    //This is if I uploaded my code to njit website
    // HOST: "sql1.njit.edu",
    // USER: "aah55",
    // PASSWORD: process.env.DB_Password,
    // DB: "aah55",
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "aah55",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000
    }
  };