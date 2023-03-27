import { DataTypes, Model } from 'sequelize';
import sequelize from './database.js';

class City extends Model {}

City.init(
  {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 2],
          msg: 'Country code must be 2 letters long.',
        },
        isUppercase: {
          msg: 'Country code must be in uppercase.',
        },
      },
    },
    time_zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'City',
    timestamps: false,
  }
);

export default City;
