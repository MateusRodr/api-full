import { container } from 'tsyringe';
import { PrismaTaskRepository } from '../repository/task.repository';
import { TaskService } from '../services/task.service';
import { PrismaClient } from '@prisma/client';

container.registerInstance(PrismaClient, new PrismaClient());
container.registerSingleton(PrismaTaskRepository);
container.registerSingleton(TaskService);
