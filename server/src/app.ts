// Core or library imports
import express, { json, Request, Response, NextFunction } from 'express';

// Custom imports
const GlobalErrorHandler = require('./utils/errorHandler');

// Setup express
const app = express();

// Setup body parser
app.use(json({ limit: '10kb' }));

// app.use(GlobalErrorHandler());

export default app;
