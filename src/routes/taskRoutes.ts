import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controllers/taskController";

const router = Router();

router.get("/user", getAllTasks);
router.post("/user", createTask);
router.get("/user/:id", getTaskById);
router.put("/user/:id", updateTask);
router.delete("/user/:id", deleteTask);

export default router;