import StudentPhoneService from '../services/StudentPhoneService';

const service = new StudentPhoneService();

class StudentPhoneController {
  async index(request, response) {
    const resultado = await service.get(1);
    response.json(resultado);
  }

  async show(request, response) {
    const resultado = await service.getById(1, 3);
    response.json(resultado);
  }

  async store(request, response) {
    const resultado = await service.store(2, 9999999, 1, 1);
    response.json(resultado);
  }

  async update(request, response) {
    const resultado = await service.update(1, 2, 'numero', 'tipo_id');
    response.json(resultado);
  }

  async delete(request, response) {
    const resultado = await service.delete(1, 2);
    response.sendStatus(202);
  }
}

export default new StudentPhoneController();
