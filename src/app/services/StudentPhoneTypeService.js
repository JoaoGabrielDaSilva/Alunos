import BaseService from './BaseService';
import { QueryTypes } from 'sequelize';

export default class StudentPhoneTypeService extends BaseService {
  constructor() {
    super();
  }

  async get() {
    const resultado = await this.execute(
      'select * from aluno_telefone_tipo',
      QueryTypes.SELECT
    );
    return resultado;
  }

  async getById(id) {
    const resultado = await this.execute(
      `Select * from public.aluno_telefone_tipo where id = '${id}'`,
      QueryTypes.SELECT
    );
    return resultado;
  }

  async store(nome) {
    const resultado = await this.execute(
      `INSERT INTO public.aluno_telefone_tipo (nome)
      VALUES ('${nome}')
      returning *`,
      QueryTypes.INSERT
    );
    return resultado;
  }

  async update(id, nome) {
    const result = await this.execute(
      `update public.aluno_telefone_tipo SET ${nome} = 'residen.'
      WHERE id = '${id}'
      returning *`,
      QueryTypes.UPDATE
    );
    return result;
  }

  async delete(id) {
    const result = await this.execute(
      `delete from public.aluno_telefone_tipo
      WHERE id = '${id}'`,
      QueryTypes.DELETE
    );
    return result;
  }
}
