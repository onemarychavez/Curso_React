import { Sequelize } from "sequelize";

const db = new Sequelize("pruebas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
