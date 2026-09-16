import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { router } from './routes/index.ts';
import { errorMiddleware } from './middlewares/error.ts';
import { initDb } from './db/index.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.CLIENT_LIVE_SERVER }));

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
