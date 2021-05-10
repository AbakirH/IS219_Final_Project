const dbConfig = require("./dbNJIT-config");
const Sequelize = require("sequelize");
console.log(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD);
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false
}
});

const db = {};
console.log("Connected");
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./tasks.model.js")(sequelize, Sequelize);

module.exports = db;