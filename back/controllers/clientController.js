const { Router } = require('express');
const rescue = require('express-rescue');
const clientService = require('../services/clientService');

const clientRouter = Router();

const successCode = 200;
const createdCode = 201;

clientRouter.post('/agenda', rescue(async (req, res, next) => {
    const client = await clientService.validationClient(req.body);
    if (client.error) {
      return next(client);
    }
    res.status(successCode).json(client);
  }),
);

clientRouter.post('/agenda/register', rescue(async (req, res, next) => {
  const client = await clientService.create(req.body);
  if (client.error) {
    return next(client);
  }
  res.status(createdCode).json(client);
}));

clientRouter.put('/agenda/:id', rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, lastName, fone, birthDate, email, address, zipCode } = req.body;
  const response = await clientService.update(id, name, lastName, fone, birthDate, email, address, zipCode);
  if (response.error) {
    next(response);
  }
  return res.status(successCode).json(response);
}));

module.exports = clientRouter;
