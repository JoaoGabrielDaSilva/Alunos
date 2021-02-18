import { Sequelize, QueryTypes } from 'sequelize';
import databaseConfig from '../../database';
console.log(databaseConfig);
const sequelize = new Sequelize(databaseConfig);

class StudentController {
  async index(request, response) {
    const resultado = await sequelize.query('select * from aluno', {
      type: QueryTypes.SELECT,
    });
    response.json(resultado);
  }

  show(request, response) {
    response.json({});
  }

  store(request, response) {
    response.json({});
  }

  update(request, response) {
    response.json({});
  }

  delete(request, response) {
    response.json({});
  }
}

export default new StudentController();
