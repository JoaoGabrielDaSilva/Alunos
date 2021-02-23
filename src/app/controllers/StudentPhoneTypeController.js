import StudentPhoneTypeService from '../services/StudentPhoneTypeService';

const service = new StudentPhoneTypeService();

class StudentPhoneTypeController {
  async index(request, response) {
    const resultado = await service.get();
    response.json(resultado);
  }

  async show(request, response) {
    const resultado = await service.getById(6);
    response.json(resultado);
  }

  async store(request, response) {
    const resultado = await service.store('teste');
    response.json(resultado);
  }

  async update(request, response) {
    const resultado = await service.update(5, 'nome');
    response.json(resultado);
  }

  async delete(request, response) {
    const resultado = await service.delete(3);
    response.sendStatus(202);
  }
}

export default new StudentPhoneTypeController();
