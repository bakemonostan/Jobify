const register = async (req, res) => {
  res.send('Registered');
};

const logIn = async (req, res) => {
  res.send('login user');
};

const updateUser = async (req, res) => {
  res.send('Update user');
};

export { register, logIn, updateUser };
