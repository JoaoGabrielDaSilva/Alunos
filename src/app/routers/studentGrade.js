import { Router } from 'express';
import StudentGradeController from '../controllers/StudentGradeController.js';

const routes = new Router();

routes.get('/student/:id/grade', StudentGradeController.index);
routes.get('/student/:id/grade/:id', StudentGradeController.show);
routes.post('/student/:id/grade', StudentGradeController.store);
routes.put('/student/:id/grade/:id', StudentGradeController.update);
routes.delete('/student/:id/grade/:id', StudentGradeController.delete);

export default routes;
