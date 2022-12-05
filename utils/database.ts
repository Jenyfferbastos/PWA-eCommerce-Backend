import { Pool } from 'pg';

const config = {
  user: process.env.USER_DATABASE,
  host: process.env.HOST_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  port: Number(process.env.PORT_DATABASE),
};

const connection = new Pool(config);
const database = process.env.DATABASE;

export const dropDB = () => {
  connection.query(`DROP DATABASE ${database}`, (err) => {
    if (err) {
      throw new Error(`trying drop database \n >> ${err} << \n`);
    }
  });
};

export const createDB = () => {
  connection.query(`CREATE DATABASE ${database}`, (err) => {
    if (err) {
      if (err.message !== `database "${database}" already exists`)
        throw new Error(`trying create database \n >> ${err} << \n`);
    }
  });
};
