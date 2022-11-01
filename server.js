import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import connectDB from './db/connect.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

// declare port variable
const port = process.env.PORT || 5000;
// setting up the port

// this would only run if the connection to the database is succesful, thats why we have the app listening inside the start() function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
