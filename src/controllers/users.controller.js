import usersService from '../services/users.service.js';
import { statusCodes } from '../config/constants.js';

async function createUser(req, res) {
  try {
    res.send(await usersService.createUser(req.body));
  } catch (e) {
    res.status(e.httpStatus || statusCodes.notFound).send({ message: e.message || '' });
  }
}

export default {
  createUser,
};
