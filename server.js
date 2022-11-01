import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// db and authenticate user
import connectDB from './db/connect.js';

//routers
import authRouter from './routes/authRoutes';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// inbuilt middle ware to get json objects for the routes, always add this
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('api/v1/auth', authRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

// declare port variable
const port = process.env.PORT || 5000;

// this would only run if the connection to the database is succesful, thats why we have the app listening inside the start() function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    // setting up the port
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
