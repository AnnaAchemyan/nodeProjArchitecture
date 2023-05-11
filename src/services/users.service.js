import User from '../models/User.js';
import { messages, statusCodes } from '../config/constants.js';
import AppError from '../errors/error.handler.js';

async function createUser(payload) {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new AppError(messages.emailAlreadyUsed, statusCodes.conflict);
  }
  const newUser = new User({ ...payload });
  await newUser.save();
  return newUser;
}

export default {
  createUser,
};
