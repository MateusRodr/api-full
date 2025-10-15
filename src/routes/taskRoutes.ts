import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controllers/taskController";

const router = Router();

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retrieve a list of tasks
 *     responses:
 *       200:
 *         description: A list of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "New Task"
 *                   status:
 *                     type: string
 *                     example: "completed"
 */
router.get("/", getAllTasks);

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - status
 *             properties:
 *               title:
 *                 type: string
 *                 example: "New Task"
 *               status:
 *                 type: string
 *                 enum: [in-progress, completed]
 *                 example: "in-progress"
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "New Task"
 *                 status:
 *                   type: string
 *                   example: "in-progress"
 */
router.post("/", createTask);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Retrieve a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "New Task"
 *                 status:
 *                   type: string
 *                   example: "in-progress"
 *       404:
 *         description: Task not found
 */
router.get("/:id", getTaskById);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Task updated"
 *               status:
 *                 type: string
 *                 enum: [in-progress, completed]
 *                 example: "completed"
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "Task updated"
 *                 status:
 *                   type: string
 *                   example: "completed"
 *       404:
 *         description: Task not found
 */
router.put("/:id", updateTask);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Task ID
 *     responses:
 *       204:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
router.delete("/:id", deleteTask);

export default router;
