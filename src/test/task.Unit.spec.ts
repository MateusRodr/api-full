import 'reflect-metadata';
import { TaskService } from '../services/task.service';

const mockRepository = {
  create: jest.fn(),
  findAll: jest.fn(),
  findById: jest.fn(),
  findByTitle: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

const service = new TaskService(mockRepository as any);

describe('TaskService Unit Tests (Mocked Repository)', () => {
  it('should create a new Task', async () => {
    mockRepository.findByTitle.mockResolvedValueOnce(null);
    mockRepository.create.mockResolvedValueOnce({
      id: 1,
      title: 'Test Task',
      status: 'in-progress',
    });

    const task = await service.create({ title: 'Test Task', status: 'in-progress' });
    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Test Task');
  });

  it('should get all tasks', async () => {
    mockRepository.findAll.mockResolvedValueOnce([
      { toJSON: () => ({ id: 1, title: 'Task A', status: 'in-progress' }) },
    ]);

    const tasks = await service.findAll();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Task A');
  });

  it('should get a task by ID', async () => {
    mockRepository.findById.mockResolvedValueOnce({
      id: 1,
      title: 'Test Task',
      status: 'in-progress',
    });

    const task = await service.findById(1);
    expect(task.title).toBe('Test Task');
  });

  it('should update a task', async () => {
    mockRepository.findById.mockResolvedValueOnce({
      id: 1,
      title: 'Old Task',
      status: 'in-progress',
    });
    mockRepository.update.mockResolvedValueOnce({
      id: 1,
      title: 'Updated Task',
      status: 'completed',
    });

    const updated = await service.update(1, { title: 'Updated Task', status: 'completed' });
    expect(updated.status).toBe('completed');
    expect(updated.title).toBe('Updated Task');
  });

  it('should delete a task', async () => {
    mockRepository.findById.mockResolvedValueOnce({
      id: 1,
      title: 'Task to Delete',
      status: 'completed',
    });
    mockRepository.delete.mockResolvedValueOnce(undefined);

    await expect(service.delete(1)).resolves.toBeUndefined();
  });
});
