import { container } from "tsyringe";
import { RequestHandler } from "express";
import { TaskService } from '../services/taskService'
import z from "zod";

const taskService = container.resolve(TaskService);


export const getAllTasks: RequestHandler = async (req, res) => {
    try {
        const tasks = await taskService.findAll();
        res.json(tasks);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}

export const createTask: RequestHandler = async (req, res) => {
    try {
        const newtask = await taskService.create(req.body);
        res.status(201).json(newtask);
    } catch (e: any) {
        if (e instanceof z.ZodError) {
            res.status(400).json({ error: "validation error", details: e.issues });
        } else {
            res.status(500).json({ error: e.message });
        }
    }
}

export const getTaskById: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.findById(Number(id));
        res.json(task);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}

export const updateTask: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updateTask = await taskService.update(Number(id), req.body);
        res.json(updateTask);
    } catch (e: any) {
        res.status(500).json({ error: e.message || "Failed to update task" });
    }
}

export const deleteTask: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await taskService.delete(Number(id));
        res.status(204).send();
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}