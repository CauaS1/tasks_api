import { Router, Request, Response } from 'express';
import { finishedTask, getTask, getTasks, removeTask, saveTask, updateTask } from './controller/TasksController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World!' });
})

routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTask);
routes.put('/tasks/:id', updateTask);
routes.patch('/tasks/:id', finishedTask); //Patch e preferencial caso va mudar apenas um item no db
routes.delete('/tasks/:id', removeTask);


export default routes;