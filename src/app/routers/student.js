import { Router } from 'express';
import StudentController from '../controllers/StudentController';

const routes = new Router();

routes.get('/student', StudentController.index);
routes.get('/student/:id', StudentController.show);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.post('/students/:id', StudentController.delete);

export default routes;
