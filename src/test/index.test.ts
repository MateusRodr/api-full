import request from 'supertest';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const user = (req: Request, res: Response) => {
  res.status(200).json({title: 'Test Task', status: 'pending'});
}

const createUser = (req: Request, res: Response) => {
    res.status(201).json({title: "estudar js", status: "pending"});
}

const configUser = (req: Request, res: Response) => {
    res.status(200).json({title: "estudar js", status: "completed"});
}

const deleteUser = (req: Request, res: Response) => {
    res.status(200).json({message: "Task deleted"});
}

app.get('/user', user);
app.post('/users', createUser);
app.put('/user/:id', configUser);
app.delete('/user/:id', deleteUser);

describe('test routers API', () => {
    it('test router GET', async () => {
        const response = await request(app).get('/user');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('title', 'Test Task');
    })
    
    it('test router POST', async () => {
        const response = await request(app).post('/users').send({title: "estudar js", status: "pending"});
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('title', 'estudar js');
    })

    it('test router PUT', async () => {
        const testdata = {title: "estudar js", status: "completed"};
        const response = await request(app).put('/user/1').send(testdata);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('status', 'completed');
    })

    it('test router DELETE', async () => {
        const response = await request(app).delete('/user/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Task deleted');
    })
})