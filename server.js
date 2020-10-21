const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Close the application incase of any uncaught exception
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

// Define the env_vars
dotenv.config({ path: './config.env' });

const app = require('./app');

/*******************
 * DATABASE STUFF
 *******************/

// Define the DB Connection route
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

// Connect to DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection to DB established');
  });

// Server
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
