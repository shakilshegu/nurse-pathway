import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const app = express();

app.use(cors({ origin: process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || '*' }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

export default app;
