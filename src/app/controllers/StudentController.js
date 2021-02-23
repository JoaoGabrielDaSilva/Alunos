import StudentService from '../services/StudentService';

const service = new StudentService();

class StudentController {
  async index(request, response) {
    const resultado = await service.get();
    response.json(resultado);
  }

  async show(request, response) {
    const resultado = await service.getUser(5);
    response.json(resultado);
  }

  async store(request, response) {
    const resultado = await service.store(
      20,
      'Leoni',
      36,
      true,
      1,
      false,
      '2004-02-14'
    );
    response.json(resultado);
  }

  async update(request, response) {
    const resultado = await service.update(5, 'nome', 'idade');
    response.json(resultado);
  }

  async delete(request, response) {
    const resultado = await service.delete(5);
    response.sendStatus(202);
  }
}

export default new StudentController();
