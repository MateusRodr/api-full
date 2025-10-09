import { PrismaClient } from "@prisma/client";
import { Task, taskProps } from "../prisma/entity/task.entity";
import { PrismaTaskMapper } from "../prisma/mappers/prisma-task-mapper";

const prisma = new PrismaClient();

export class PrismaTaskRepository {
    async create(task: Task): Promise<taskProps> {
        const data = PrismaTaskMapper.toPrisma(task)
        const created = await prisma.task.create({data})
        return PrismaTaskMapper.toDomain(created)
    }

    async findAll(): Promise<taskProps[]> {
        const tasks = await prisma.task.findMany();
        return tasks.map(PrismaTaskMapper.toDomain);
    }

  async findById(id: number): Promise<taskProps | null> {      
    const task = await prisma.task.findUnique({where: {id}});
    if (!task) {
      return null;  
    }
    return PrismaTaskMapper.toDomain(task);
}
   async delete(id:number, status:string): Promise<void> {
    await prisma.task.delete({where: {id}});
   }
   async update(id:number, status:string): Promise<taskProps> {
    const updated = await prisma.task.update({
        where: {id},
        data: {Status: status}
    });
    return PrismaTaskMapper.toDomain(updated)
  }
}