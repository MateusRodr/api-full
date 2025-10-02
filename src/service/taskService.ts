import { taskschema } from "../validations/taskvalidation";
import prisma from "../prisma/client";

const createTask = async(data:any) => {
    const parsedData = taskschema.parse(data);

    const titleExists = await prisma.task.findFirst({
      where: {
        Title: parsedData.title
      }
    });

    if (titleExists) {
      throw new Error("Task with this title already exists");
    }

    const newTask = await prisma.task.create({
      data: {
        Title: parsedData.title,
        Status: parsedData.status
      }
    });

    return newTask;
}

const getAllTasks = async() => {
    const tasks = await prisma.task.findMany();
    return tasks;
}

const getTaskById = async(id:number) => {
    const task = await prisma.task.findUnique({
      where: {
        id: id
      }
    });

    if (!task) {
      throw new Error("Task not found");
    }

    return task;
}

const updateTask = async(id:number, data:any) => {
    const parsedData = taskschema.parse(data);

    const task = await prisma.task.findUnique({
      where: {
        id: id
      }
    });

    if (!task) {
      throw new Error("Task not found");
    }

    const updatedTask = await prisma.task.update({
      where: {
        id: id
      },
      data: {
        Title: parsedData.title,
        Status: parsedData.status
      }
    });

    return updatedTask;
}

const deleteTask = async(id:number) => {
    const task = await prisma.task.findUnique({
      where: {
        id: id
      }
    });

    if (!task) {
      throw new Error("Task not found");
    }

    await prisma.task.delete({
      where: {
        id: id
      }
    });
}
export { createTask, getAllTasks, getTaskById, updateTask, deleteTask };