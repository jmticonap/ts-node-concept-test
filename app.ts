import express from 'express';
import executorController from './src/infrastructure/controller/executor.controller';

const app = express();
const port = 3000;

app.get('/', executorController);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});