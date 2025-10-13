import "reflect-metadata";
import './shared /container'
import express, { Express } from "express";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";
require('dotenv').config();

const app: Express = express();
const Port = process.env.PORT || 3012;

app.use(cors());
app.use(express.json());
app.use("/", taskRoutes);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

export default app;
