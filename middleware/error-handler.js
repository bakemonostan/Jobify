import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    StatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: 'Something went wrong',
  };
  res.status(defaultError.StatusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
