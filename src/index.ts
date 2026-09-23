import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'node:path';

import { router } from './routes/index.ts';
import { errorMiddleware } from './middlewares/error.ts';
import { initDb } from './db/index.ts';
import { headerMiddleware } from './middlewares/headers.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(headerMiddleware);

const rootDir = process.cwd();

// We need this separate from router. We need / call within the router it will be /api
app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

// router
app.use('/api', router);

// error middleware
app.use(errorMiddleware);

const start = async () => {
  try {
    await initDb();
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
