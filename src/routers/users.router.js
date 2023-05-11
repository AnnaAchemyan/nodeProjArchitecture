import express from 'express';
import usersController from '../controllers/users.controller.js';
import { userValidation, validate } from '../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/',
  userValidation(),
  validate,
  usersController.createUser,
);

export default router;
