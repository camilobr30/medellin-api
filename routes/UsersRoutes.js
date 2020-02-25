const express = require('express');

const router = express.Router();
const { celebrate, Joi, Segments } = require('celebrate');
const { UsersController } = require('../controllers');

router.post(
  '/users',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().required(),
    }),
  }),
  UsersController.createUser,
);
router.get('/users', UsersController.getUsers);
router.get('/users/:id', UsersController.getUserById);
router.patch('/users/:id', UsersController.updateUserById);
router.delete('/users/:id', UsersController.getUserById);

module.exports = router;
