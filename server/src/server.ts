import { connect } from 'mongoose';
import { config } from 'dotenv';

// Handle uncaughtException
process.on('uncaughtException', (err: Error) => {
  console.log(err.name, err.message);
  process.exit(1);
});

// Config env variables
config({ path: `${__dirname}/../config.env` });

import app from './app';

// Get the env vars
const database = process.env.DATABASE!.replace(
  '<password>',
  process.env.DATABASE_PASSWORD!
);
const PORT: string | number = process.env.PORT || 5000;

let server: any;

class Server {
  constructor(public database: string, public PORT: string | number) {
    this.database = database;
    this.PORT = PORT;
  }

  private connectToDatabase() {
    connect(this.database, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }).then(() => console.log('Connected to database!'));
  }

  public start() {
    this.connectToDatabase();
    server = app.listen(this.PORT, () =>
      console.log(`App running on port ${this.PORT}`)
    );
  }

  public close() {
    server.close(() => {
      process.exit(1);
    });
  }
}

const newServer = new Server(database, PORT);
newServer.start();

// Handle unhandeledRejection
process.on('unhandledRejection', (err: Error) => {
  console.log(err.name, err.message);
  newServer.close();
});

// Handle SIGTERM
process.on('SIGTERM', () => {
  console.log('SIGTERM!');
  newServer.close();
});
