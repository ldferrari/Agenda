const { Client } = require('../models');

const getByidUser = async (idUser) => await Client.findAll({
  where: { idUser },
});

const getByName = async (name) => await Client.findAll({
  where: { name },
});

const getByEmail = async (email) => await Client.findOne({
  where: { email },
});

const validateClientData = async (body) => {
  const { idUser } = body;
  const allClient = [];
  const clients = await getByidUser(idUser);
  clients.map((client) => allClient.push(client.dataValues))
  /* const client = await getByName(idUser, name);
  if (client) {
    client.dataValues.error = false;
  } */
  return allClient;
};

const validationClient = async (body) => {
  const client = await validateClientData(body);
  if (client.error) return client;
  return client;
};

const create = async (client) => {
  const { idUser, name, lastName, fone, birthDate, email, address, zipCode } = client.clientData;
  const validation = await getByEmail(email);
  if (validation) {
    return {
      error: true,
      code: 'conflict',
      message: 'E-mail already in database.',
    };
  }
  return Client.create({ idUser, name, lastName, fone, birthDate, email, address, zipCode });
};

const update = async (id, idUser, name, lastName, fone, birthDate, email, address, zipCode) => {
  const clientExists = await Client.findOne({
    where: { id }
  });
  if (!clientExists) {
    return {
      error: true,
      code: 'not_found',
      message: 'Client not found',
    };
  }
  await Client.update({ idUser, name, lastName, fone, birthDate, email, address, zipCode }, { where: { id }});
  return ({ id, idUser, name, lastName, fone, birthDate, email, address, zipCode, message: 'success' });
};

module.exports = {
  validationClient,
  getByName,
  create,
  update,
};
