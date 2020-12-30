const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

// Trust proxies for heroku
app.enable('trust proxy');

// Set pug engine🐶
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

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
app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);

// 404 Routes for not defined ¯\_(ツ)_/¯
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.url} on this server!`, 404));
});

// Error handeling Middleware
app.use(globalErrorHandler);

module.exports = app;
