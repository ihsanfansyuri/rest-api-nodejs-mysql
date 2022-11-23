import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const { DB_HOST, DB_USER, DB_PASSSWORD, DB_NAME, DB_DIALECT } = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSSWORD,
  database: DB_NAME,
  dialect: DB_DIALECT,
});

export default db;
