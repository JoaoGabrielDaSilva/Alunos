import StudentGradeService from '../services/StudentGradeService';

const service = new StudentGradeService();

class StudentGradeController {
  async index(request, response) {
    const resultado = await service.get(3);
    response.json(resultado);
  }

  async show(request, response) {
    const resultado = await service.getById(3, 6);
    response.json(resultado);
  }

  async store(request, response) {
    const resultado = await service.store(6, 'prova - 3', 5, 3, 1);
    response.json(resultado);
  }

  async update(request, response) {
    const resultado = await service.update(6, 3, 'descricao', 'nota');
    response.json(resultado);
  }

  async delete(request, response) {
    const resultado = await service.delete(6, 3);
    response.sendStatus(202);
  }
}

export default new StudentGradeController();
