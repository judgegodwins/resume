const router = require('express').Router();
const Joi = require('joi');

const Message = require('../db/models/Message');
const asyncHandler = require('../helpers/asyncHandler');
const validator = require('../helpers/validator');

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.number().optional(),
  message: Joi.string().required()
})

router.post(
  '/deliver',
  validator(schema, 'body'),
  asyncHandler(async (req, res) => {
    const { name, message, email, phoneNumber } = req.body;

    const newMessage = new Message({
      name,
      message,
      email,
      phoneNumber
    });

    await newMessage.save();

    res.json({
      success: true,
      message: "Message delivered"
    })
  })
);

module.exports = router;