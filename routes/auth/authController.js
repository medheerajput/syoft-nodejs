const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const { hashPassword, comparePassword } = require('../../utils/bcrypt');
const { generateToken } = require('../../utils/jwt');
const { errors } = require('../../utils/errors');
const { success } = require('../../utils/success');

const registration = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json(errors.badRequest('Please provide all fields'));
  }

  try {
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ username, email, password: hashedPassword, role });

    await newUser.save();
    res.status(201).json(success.created('User created'));
  } catch (err) {
    res.status(500).json(errors.internalServerError('Error creating user'));
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json(errors.badRequest('Please provide all fields'));
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json(errors.badRequest('Invalid email or password'));
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json(errors.badRequest('Invalid email or password'));
    }

    const token = generateToken({ id: user._id, role: user.role });
    res.status(200).json(success.ok('Login successful', { token }));
  } catch (err) {
    res.status(500).json(errors.internalServerError('Error logging in'));
  }
}


module.exports = {registration,login}