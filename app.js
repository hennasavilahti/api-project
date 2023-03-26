import express from 'express';

import {
  getCities,
  getCityById,
  getCityByQuery,
  createCity,
} from './database.js';

const app = express();

app.use(express.json());

app.get('/cities', async (req, res) => {
  let cities;
  try {
    if (!Object.keys(req.query).length) {
      cities = await getCities();
    } else {
      cities = await getCityByQuery(req.query);
    }

    if (cities) {
      res.status(200).send(cities);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('ERROR');
  }
});

app.get('/cities/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const city = await getCityById(id);
    res.send(city);
  } catch (err) {
    console.log(err);
    res.status(500).send('ERROR');
  }
});

app.post('/cities', async (req, res) => {
  const { city, country, code, time_zone } = req.body;
  try {
    const new_city = await createCity(city, country, code, time_zone);
    res.status(201).send(new_city);
  } catch (err) {
    console.log(err);
    res.status(500).send('ERROR');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
