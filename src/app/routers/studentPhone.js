import { Router } from 'express';
import StudentPhoneController from '../controllers/StudentPhoneController.js';

const routes = new Router();

routes.get('/student/:id/phone', StudentPhoneController.index);
routes.get('/student/:id/phone/:id', StudentPhoneController.show);
routes.post('/student/:id/phone', StudentPhoneController.store);
routes.put('/student/:id/phone/:id', StudentPhoneController.update);
routes.delete('/student/:id/phone/:id', StudentPhoneController.delete);

export default routes;
