import { injectable } from "tsyringe";
import { PrismaClient } from "@prisma/client";
import { Task } from "../prisma/entity/task.entity";
import { PrismaTaskMapper } from "../prisma/mappers/prisma-task-mapper";

const prisma = new PrismaClient();

@injectable()
export class PrismaTaskRepository {
  async create(task: Task): Promise<Task> {
    const data = PrismaTaskMapper.toPrisma(task);
    const created = await prisma.task.create({ data });
    return PrismaTaskMapper.toDomain(created);
  }

  async findAll(): Promise<Task[]> {
    const tasks = await prisma.task.findMany();
    return tasks.map(PrismaTaskMapper.toDomain);
  }

  async findById(id: number): Promise<Task | null> {
    const task = await prisma.task.findUnique({ where: { id } });
    return task ? PrismaTaskMapper.toDomain(task) : null;
  }

  async findByTitle(title: string): Promise<Task | null> {
    const task = await prisma.task.findFirst({ where: { title: title } });
    return task ? PrismaTaskMapper.toDomain(task) : null;
  }

  async update(id: number, task: Task): Promise<Task> {
    const updated = await prisma.task.update({
      where: { id },
      data: PrismaTaskMapper.toPrisma(task),
    });
    return PrismaTaskMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await prisma.task.delete({ where: { id } });
  }
}
