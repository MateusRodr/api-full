import { container } from "tsyringe";
import { PrismaTaskRepository } from "../repository/prisma-task-repository";
import { TaskService } from "../service/taskService";
import prisma from "../prisma/client";

container.registerSingleton(PrismaTaskRepository);
container.registerSingleton(TaskService);
