import BaseService from './BaseService';
import { QueryTypes } from 'sequelize';

export default class StudentPhoneService extends BaseService {
  constructor() {
    super();
  }

  async get(id) {
    const resultado = await this.execute(
      `Select * from public.aluno_telefone where aluno_id = '${id}'`,
      QueryTypes.SELECT
    );
    return resultado;
  }

  async getById(id, phone_id) {
    const resultado = await this.execute(
      `Select * from public.aluno_telefone where aluno_id = '${id}' and id = '${phone_id}'`,
      QueryTypes.SELECT
    );
    return resultado;
  }

  async store(id, numero, aluno_id, tipo_id) {
    const resultado = await this.execute(
      `INSERT INTO public.aluno_telefone (id, numero, aluno_id, tipo_id)
      VALUES (${id}, '${numero}', ${aluno_id},  ${tipo_id})
      returning *`,
      QueryTypes.INSERT
    );
    return resultado;
  }

  async update(aluno_id, phone_id, ...fields) {
    const result = await this.execute(
      `update public.aluno_telefone SET ${fields[0]} = 999402468, ${fields[1]} = 2
      WHERE aluno_id = ${aluno_id} and id = ${phone_id}
      returning *`,
      QueryTypes.UPDATE
    );
    return result;
  }

  async delete(aluno_id, id) {
    const result = await this.execute(
      `delete from public.aluno_telefone
      WHERE id = ${id} and aluno_id = ${aluno_id}
      returning *`,
      QueryTypes.DELETE
    );
    return result;
  }
}
