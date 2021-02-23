import BaseService from './BaseService';
import { QueryTypes } from 'sequelize';

export default class StudentGradeService extends BaseService {
  constructor() {
    super();
  }

  async get(id) {
    const resultado = await this.execute(
      `Select * from public.aluno_nota where aluno_id = '${id}'`,
      QueryTypes.SELECT
    );
    return resultado;
  }

  async getById(id, nota_id) {
    const resultado = await this.execute(
      `Select * from public.aluno_nota where aluno_id = '${id}' and id = '${nota_id}'`,
      QueryTypes.SELECT
    );
    return resultado;
  }

  async store(id, descricao, nota, aluno_id, materia_id) {
    const resultado = await this.execute(
      `INSERT INTO aluno_nota (id, descricao, nota, aluno_id, materia_id)
      VALUES (${id}, '${descricao}', ${nota}, ${aluno_id}, ${materia_id})
      returning *`,
      QueryTypes.INSERT
    );
    return resultado;
  }

  async update(id, aluno_id, ...fields) {
    const result = await this.execute(
      `update public.aluno_nota SET ${fields[0]} = 'prova - 3(corrigida)', ${fields[1]} = '10'
      WHERE id = ${id} and aluno_id = ${aluno_id}
      returning *`,
      QueryTypes.UPDATE
    );
    return result;
  }

  async delete(id, aluno_id) {
    const result = await this.execute(
      `delete from public.aluno_nota
      WHERE id = ${id} and aluno_id = ${aluno_id}
      returning *`,
      QueryTypes.DELETE
    );
    return result;
  }
}
