import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getCities() {
  const [rows] = await pool.query('SELECT * FROM cities');
  return rows;
}

export async function getCityById(id) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM cities
    WHERE id = ?
    `,
    [id]
  ); // Prepared Statement
  return rows[0];
}

export async function getCityByQuery(query) {
  const keys = Object.keys(query);
  const values = Object.values(query);

  let sql = `SELECT * FROM cities WHERE ${keys[0]} LIKE ?`;

  for (let i = 1; i < keys.length; i++) {
    sql += ` AND ${keys[i]} LIKE ?`;
  }

  const [rows] = await pool.query(sql + ';', values);
  return rows;
}

export async function createCity(city, country, code, time_zone) {
  const [result] = await pool.query(
    `
    INSERT INTO cities (city, country, code, time_zone)
    VALUES (?, ?, ?, ?)
    `,
    [city, country, code, time_zone]
  );
  const id = result.insertId;
  return getCityById(id);
}

// const cities = await getCities()
// console.log(cities)
