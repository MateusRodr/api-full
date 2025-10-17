import { container } from "tsyringe";
import { PrismaTaskRepository } from "../repository/prisma-task-repository";
import { TaskService } from "../services/taskService";
import { PrismaClient } from "@prisma/client";

container.registerInstance(PrismaClient, new PrismaClient());
container.registerSingleton(PrismaTaskRepository);
container.registerSingleton(TaskService);
