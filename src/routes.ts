import {Router, request, response, Request, Response} from 'express';
import { getTask, getTasks, saveTask, editTask, finishedTask, deleteTask } from './controller/TaskController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Hello World'});
});

routes.get('/tasks', getTasks);
routes.post('/tasks', saveTask);
routes.get('/tasks/:id', getTask);
routes.put('/tasks/:id', editTask);
routes.patch('/tasks/:id', finishedTask);
routes.delete('/tasks/:id', deleteTask);

export default routes;
