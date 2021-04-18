import express, { json, Request, Response, NextFunction } from 'express';

// Setup express
const app = express();

// Setup body parser
app.use(json({ limit: '10kb' }));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
  next();
});

export default app;
