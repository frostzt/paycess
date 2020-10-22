const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Log if in dev
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, read data from req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

app.use(compression());

// Routes
app.use('/api/v1/users', userRouter);

// Error handeling Middleware
app.use(globalErrorHandler);

module.exports = app;
