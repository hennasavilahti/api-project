import express from 'express';

import { getCities, getCity, createCity } from './database.js';

const app = express();

app.use(express.json());

app.get('/cities', async (req, res) => {
  const cities = await getCities();
  res.send(cities);
});

app.get('/cities/:id', async (req, res) => {
  const id = req.params.id;
  const city = await getCity(id);
  res.send(city);
});

app.post('/cities', async (req, res) => {
  const { city, country, code, time_zone } = req.body;
  const new_city = await createCity(city, country, code, time_zone);
  res.status(201).send(new_city);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
