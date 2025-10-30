import { injectable, inject } from 'tsyringe';
import { taskschema } from '../validations/task.validation';
import { Task } from '../entity/task.entity';
import { ITaskRepository } from '../repository/interfaces/ITaskRepository';

@injectable()
export class TaskService {
  constructor(
    @inject('ITaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async create(data: any) {
    const parsedData = taskschema.parse(data);
    const titleExists = await this.taskRepository.findByTitle(parsedData.title);
    if (titleExists) {
      throw new Error('Task with this title already exists');
    }
    const validStatuses = ['in-progress', 'completed'];
    if (!validStatuses.includes(parsedData.status)) {
      throw new Error(`Invalid status. Valid statuses are: ${validStatuses.join(', ')}`);
    }

    const task = new Task({
      title: parsedData.title,
      status: parsedData.status,
    });

    return await this.taskRepository.create(task);
  }

  async findAll() {
    const tasks = await this.taskRepository.findAll();
    return tasks.map((task) => task.toJSON());
  }

  async findById(id: number) {
    const task = await this.taskRepository.findById(id);
    if (!task) throw new Error('Task not found');
    return task;
  }

  async update(id: number, data: any) {
    const parsedData = taskschema.parse(data);
    const existing = await this.taskRepository.findById(id);
    if (!existing) throw new Error('Task not found');

    const updatedTask = new Task(parsedData, id);
    return await this.taskRepository.update(id, updatedTask);
  }

  async delete(id: number) {
    const task = await this.taskRepository.findById(id);
    if (!task) throw new Error('Task not found');
    await this.taskRepository.delete(id);
  }
}
