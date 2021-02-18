import BaseService from './BaseService';
import { QueryTypes } from 'sequelize';

export default class StudentService extends BaseService {
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('select * from aluno', QueryTypes.SELECT);
    return result.map(item => (item.nome = item.nome.trim()));
  }
}
