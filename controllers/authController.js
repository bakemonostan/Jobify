const register = (req, res) => {
  res.send('Registered');
};

const logIn = (req, res) => {
  res.send('login user');
};

const updateUser = (req, res) => {
  res.send('Update user');
};

export { register, logIn, updateUser };
