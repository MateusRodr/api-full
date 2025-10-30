import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });
import { TaskService } from '../services/task.service';
import { PrismaClient } from '@prisma/client';
import { TaskRepository } from '../repository/task.repository';

process.env.DATABASE_URL = process.env.DATABASE_URL || 'file:./test.db';

const prisma = new PrismaClient();
const repository = new TaskRepository(prisma);
const service = new TaskService(repository);

let createdTaskId: number;
const initialTaskData = {
  title: 'Initial Test Task',
  status: 'in-progress',
};

beforeAll(async () => {
  await prisma.$connect();
  await prisma.task.deleteMany();
});

beforeEach(async () => {
  const newTask = await service.create(initialTaskData);
  if (typeof newTask.id !== 'number') {
    throw new Error('Task ID is undefined after creation');
  }
  createdTaskId = newTask.id;
});

afterEach(async () => {
  await prisma.task.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Task Service Integration Tests', () => {
  it('should create a new Task (verified by beforeEach)', async () => {
    expect(createdTaskId).toBeDefined();
    const task = await service.findById(createdTaskId);
    expect(task.title).toBe(initialTaskData.title);
  });

  it('should get all tasks', async () => {
    const tasks = await service.findAll();
    expect(tasks).toBeInstanceOf(Array);
    expect(tasks.length).toBeGreaterThanOrEqual(1);
  });

  it('should get a task by ID', async () => {
    const task = await service.findById(createdTaskId);
    expect(task).toHaveProperty('id');
    expect(task.id).toBe(createdTaskId);
    expect(task.title).toBe(initialTaskData.title);
  });

  it('should update a task', async () => {
    const updated = await service.update(createdTaskId, {
      title: 'Updated Task',
      status: 'completed',
    });
    expect(updated).toHaveProperty('id');
    expect(updated.id).toBe(createdTaskId);
    expect(updated.title).toBe('Updated Task');
    expect(updated.status).toBe('completed');
  });

  it('should delete a task', async () => {
    await service.delete(createdTaskId);
    await expect(service.findById(createdTaskId)).rejects.toThrow('Task not found');
  });
});
