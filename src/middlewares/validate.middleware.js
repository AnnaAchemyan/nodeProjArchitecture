import { body, validationResult } from 'express-validator';
import { messages, statusCodes } from '../config/constants.js';

export const userValidation = () => [
  body('firstName').isLength({ min: 2, max: 20 }).withMessage(messages.firstnameContain),
  body('email').isEmail().withMessage(messages.invalidEmail),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(statusCodes.unprocessableEntity).json({
    errors: extractedErrors,
  });
};
