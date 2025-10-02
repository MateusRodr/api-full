import { RequestHandler } from "express";
import * as taskService from "../service/taskService";

export const getAllTasks: RequestHandler = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    } catch (e: any) {
        res.status(500).json({error: e.message });
    }
}

export const createTask: RequestHandler = async (req, res ) => {
    try{
        const newtask = await taskService.createTask(req.body);
        res.status(201).json(newtask);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
} //zod aqui 

export const updateTask: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updateTask = await taskService.updateTask(id, req.body);
        res.json(updateTask);
    } catch (e:any) {
        res.status(500).json({ error: e.message || "Failed to update task" });
    }
}

export const deleteTask : RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await taskService.deleteTask(id);
        res.status(204).send();
    } catch(e: any){
        res.status(500).json({ error: e.message});
    }
}