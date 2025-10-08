import { Task } from '../entity/task.entity';
import { Prisma, Task as PrismaTask } from '@prisma/client';

export class PrismaTaskMapper {
  static toPrisma(task: Task): Prisma.TaskCreateInput {
    return {
      Title: task.title,
      Status: task.status,
    };
  }

  static toDomain(raw: PrismaTask): Task {
    return new Task(
      {
        title: raw.Title,
        status: raw.Status as "in-progress" | "completed",
      },
      raw.id
    );
  }
}
