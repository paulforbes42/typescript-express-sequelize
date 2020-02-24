import fs from 'fs';
import {Sequelize, SequelizeOptions} from 'sequelize-typescript';

const env: string = process.env.NODE_ENV || 'development';
const databaseConfigString: string = fs.readFileSync('./config/db.json', 'UTF-8');
const databaseConfig: SequelizeOptions = JSON.parse(databaseConfigString)[env];
databaseConfig.models = [`${__dirname}/models`];

export const sequelize: Sequelize = new Sequelize(databaseConfig);
