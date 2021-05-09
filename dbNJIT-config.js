require("dotenv").config();

module.exports = {
    HOST: "sql1.njit.edu",
    USER: "aah55",
    PASSWORD: process.env.DB_Password,
    DB: "aah55",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };