import express from 'express';

const app = express();

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
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
