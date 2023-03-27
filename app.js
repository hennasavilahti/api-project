import express from 'express';
import City from './city.js';
import sequelize from './database.js';

const app = express();

app.use(express.json());

app.get('/cities', async (req, res) => {
  try {
    const cities = await City.findAll({
      where: req.query,
    });
    if (cities.length) {
      res.status(200).send(cities);
    } else {
      res.status(404).send('Did not find any matching cities.');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('ERROR');
  }
});

app.post('/cities', async (req, res) => {
  try {
    const city = await City.create(req.body);
    if (city) {
      res.status(201).send(city);
    }
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      res.status(403).send(err.errors[0].message); // User error
    } else {
      res.status(500).send(err.message);
    }
  }
});

sequelize
  .sync()
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
