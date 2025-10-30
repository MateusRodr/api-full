import { Task } from '../../prisma/entity/task.entity';

export interface ITaskRepository {
  create(task: Task): Promise<Task>;
  findAll(): Promise<Task[]>;
  findById(id: number): Promise<Task | null>;
  findByTitle(title: string): Promise<Task | null>;
  update(id: number, task: Partial<Task>): Promise<Task>;
  delete(id: number): Promise<void>;
}
