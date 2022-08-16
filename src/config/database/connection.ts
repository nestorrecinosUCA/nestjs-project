import { DataSource } from 'typeorm';
import * as mySQLConnectionOptions from '../../../ormconfig.js';
export const mySQLConnection = new DataSource(mySQLConnectionOptions);