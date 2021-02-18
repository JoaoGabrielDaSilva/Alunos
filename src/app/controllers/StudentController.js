import StudentService from '../services/StudentService';

const service = new StudentService();

class StudentController {
  async index(request, response) {
    const resultado = await service.get();
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
