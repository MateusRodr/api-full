import { container } from "tsyringe";
import { PrismaTaskRepository } from "../repository/prisma-task-repository";
import { TaskService } from "../services/taskService";

container.registerSingleton(PrismaTaskRepository);
container.registerSingleton(TaskService);
