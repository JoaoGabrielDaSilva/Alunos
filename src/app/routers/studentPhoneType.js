import { Router } from 'express';
import StudentPhoneTypeController from '../controllers/StudentPhoneTypeController.js';

const routes = new Router();

routes.get('/phone-type', StudentPhoneTypeController.index);
routes.get('/phone-type/:id', StudentPhoneTypeController.show);
routes.post('/phone-type', StudentPhoneTypeController.store);
routes.put('/phone-type/:id', StudentPhoneTypeController.update);
routes.delete('/phone-type/:id', StudentPhoneTypeController.delete);

export default routes;
