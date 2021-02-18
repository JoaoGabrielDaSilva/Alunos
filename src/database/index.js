import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
  }
}
