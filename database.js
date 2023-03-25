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

export async function getCity(id) {
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

export async function createCity(city, country, code, time_zone) {
  const [result] = await pool.query(
    `
    INSERT INTO cities (city, country, code, time_zone)
    VALUES (?, ?, ?, ?)
    `,
    [city, country, code, time_zone]
  );
  const id = result.insertId;
  return getCity(id);
}

// const cities = await getCities()
// console.log(cities)
