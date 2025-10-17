import { injectable } from "tsyringe";
import { PrismaClient } from "@prisma/client";
import { Task } from "../prisma/entity/task.entity";
import { PrismaTaskMapper } from "../prisma/mappers/prisma-task-mapper";



@injectable()
export class PrismaTaskRepository {
  constructor(private prisma: PrismaClient) {}
  async create(task: Task): Promise<Task> {
    const data = PrismaTaskMapper.toPrisma(task);
    const created = await this.prisma.task.create({ data });
    return PrismaTaskMapper.toDomain(created);
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();
    return tasks.map(PrismaTaskMapper.toDomain);
  }

  async findById(id: number): Promise<Task | null> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    return task ? PrismaTaskMapper.toDomain(task) : null;
  }

  async findByTitle(title: string): Promise<Task | null> {
    const task = await this.prisma.task.findFirst({ where: { title: title } });
    return task ? PrismaTaskMapper.toDomain(task) : null;
  }

  async update(id: number, task: Task): Promise<Task> {
    const updated = await this.prisma.task.update({
      where: { id },
      data: PrismaTaskMapper.toPrisma(task),
    });
    return PrismaTaskMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.task.delete({ where: { id } });
  }
}
