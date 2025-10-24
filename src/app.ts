import 'reflect-metadata';
import './shared /container';
import express, { Express } from 'express';
import taskRoutes from './routes/task.routes';
import cors from 'cors';
import { setupSwagger } from './swagger';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/user', taskRoutes);

setupSwagger(app);

export default app;
