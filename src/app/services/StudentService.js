import BaseService from './BaseService';
import { QueryTypes } from 'sequelize';

export default class StudentService extends BaseService {
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('select * from aluno', QueryTypes.SELECT);
    return result.map(item => {
      item.nome = item['nome'].trim();
      return item;
    });
  }

  async getUser(id) {
    const result = await this.execute(
      `select * from aluno where aluno.id = ${id}`,
      QueryTypes.SELECT
    );
    return result.map(item => {
      item.nome = item['nome'].trim();
      return item;
    });
  }

  async store(id, nome, idade, status, turma_id, pcd, data_nascimento) {
    const result = await this.execute(
      `INSERT INTO public.aluno (id, nome, idade, status, turma_id, pcd, data_nascimento)
      VALUES (${id}, '${nome}', ${idade}, ${status}, ${turma_id}, ${pcd}, '${data_nascimento}') returning *`,
      QueryTypes.INSERT
    );
    return result;
  }

  async update(id, ...fields) {
    const result = await this.execute(
      `update public.aluno SET ${fields[0]} = 'TESTE', ${fields[1]} = '20'
      WHERE id = ${id} returning *`,
      QueryTypes.UPDATE
    );
    return result;
  }

  async delete(id) {
    const result = await this.execute(
      `DELETE FROM public.aluno
      WHERE id = ${id}`,
      QueryTypes.DELETE
    );
    return result;
  }
}
