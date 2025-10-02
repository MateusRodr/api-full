import { RequestHandler } from "express";
import * as taskService from "../service/taskService";
import z, { number } from "zod";

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
        if(e instanceof z.ZodError){
            res.status(400).json({error: "validation error", details: e.issues});
    }else{
        res.status(500).json({ error: e.message });
    }
}
} 

export const getTaskById: RequestHandler = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await taskService.getTaskById(Number(id));
        res.json(task);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}

export const updateTask: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updateTask = await taskService.updateTask(Number(id), req.body);
        res.json(updateTask);
    } catch (e:any) {
        res.status(500).json({ error: e.message || "Failed to update task" });
    }
}

export const deleteTask : RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await taskService.deleteTask(Number(id));
        res.status(204).send();
    } catch(e: any){
        res.status(500).json({ error: e.message});
    }
}