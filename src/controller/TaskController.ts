import { AppDataSource } from "../data-source";
import { Task } from "../entity/Task";

import {Request, Response} from "express";

const repository = AppDataSource.getRepository(Task);

export const getTasks = async (request: Request, response: Response) => {
    const tasks = await repository.find();
    return response.json(tasks);
};

export const saveTask = async (request: Request, response: Response) => {
    const task = await repository.save(request.body);
    return response.json(task);
}

export const getTask = async (request: Request, response: Response) => {
    const {id} = request.params;
    const task = await repository.findOneBy({id: parseInt(id)});
    return response.json(task);
}

export const editTask = async (request: Request, response: Response) => {
    const {id} = request.params;
    const task = await repository.update(id, request.body);
    if(task.affected == 1) {
      const taskUpdated = await repository.findOneBy({id: parseInt(id)});
      return response.json(taskUpdated);
    }
    else{
      return response.status(404).json({message: 'Task not found!'});
    }
}
export const finishedTask = async (request: Request, response: Response) => {
  const {id} = request.params;
  const task = await repository.update(id, {finished: true});
  if(task.affected == 1) {
    const taskUpdated = await repository.findOneBy({id: parseInt(id)});
    return response.json(taskUpdated);
  }
  else{
    return response.status(404).json({message: 'Task not found!'});
  }
}
export const deleteTask = async (request: Request, response: Response) => {
  const {id} = request.params;
  const task = await repository.delete(id);
  if(task.affected == 1) {
    return response.status(200).json({message: 'Task deleted!'});
  }
  else{
    return response.status(404).json({message: 'Task not found!'});
  }
}


