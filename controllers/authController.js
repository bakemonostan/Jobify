import User from '../models/User.js';

const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

const logIn = async (req, res) => {
  res.send('login user');
};

const updateUser = async (req, res) => {
  res.send('Update user');
};

export { register, logIn, updateUser };
