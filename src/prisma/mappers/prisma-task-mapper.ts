import { Task } from '../entity/task.entity';
import { Prisma, Task as PrismaTask } from '@prisma/client';

export class PrismaTaskMapper {
  static toPrisma(task: Task): Prisma.TaskCreateInput {
    return {
      title: task.title,
      status: task.status,
    };
  }

  static toDomain(raw: PrismaTask): Task {
    return new Task(
      {
        title: raw.title,
        status: raw.status as "in-progress" | "completed",
      },
      raw.id
    );
  }
}
