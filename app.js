const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

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

module.exports = app;
