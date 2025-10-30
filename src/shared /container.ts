import { container } from 'tsyringe';
import { TaskRepository } from '../repository/task.repository';
import { TaskService } from '../services/task.service';
import { PrismaClient } from '@prisma/client';
import { ITaskRepository } from '../repository/interfaces/ITaskRepository';

container.registerInstance(PrismaClient, new PrismaClient());
container.registerSingleton<ITaskRepository>('ITaskRepository', TaskRepository);
container.registerSingleton(TaskService);
