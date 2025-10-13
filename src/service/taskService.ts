import { taskschema } from "../validations/taskvalidation";
import { Task } from "../prisma/entity/task.entity";
import { PrismaTaskRepository } from "../repository/prisma-task-repository";
import { injectable, inject } from "tsyringe";


@injectable()
export class TaskService {
  constructor(
    @inject(PrismaTaskRepository)
    private taskRepository: PrismaTaskRepository
  ) {}

  async create(data: any) {
    const parsedData = taskschema.parse(data);
    const titleExists = await this.taskRepository.findByTitle(parsedData.title);
    if (titleExists) {
      throw new Error("Task with this title already exists");
    }

    const task = new Task({
      title: parsedData.title,
      status: parsedData.status,
    });

    return await this.taskRepository.create(task);
  }

  async findAll() {
    return await this.taskRepository.findAll();
  }

  async findById(id: number) {
    const task = await this.taskRepository.findById(id);
    if (!task) throw new Error("Task not found");
    return task;
  }

  async update(id: number, data: any) {
    const parsedData = taskschema.parse(data);
    const existing = await this.taskRepository.findById(id);
    if (!existing) throw new Error("Task not found");

    const updatedTask = new Task(
      {
        title: parsedData.title,
        status: parsedData.status,
      },
      id
    );

    return await this.taskRepository.update(id, updatedTask);
  }

  async delete(id: number) {
    const task = await this.taskRepository.findById(id);
    if (!task) throw new Error("Task not found");
    await this.taskRepository.delete(id);
  }
}
