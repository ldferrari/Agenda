'use strict';

const id = (Sequelize) => ({
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  allowNull: false
});

const idUser = (Sequelize) => ({
  type: Sequelize.INTEGER,
  allowNull: false
});

const name = (Sequelize) => ({
  type: Sequelize.STRING,
  allowNull: false
});

const lastName = (Sequelize) => ({
  type: Sequelize.STRING,
  allowNull: false
});

const fone = (Sequelize) => ({
  type: Sequelize.STRING,
  allowNull: false
});

const birthDate = (Sequelize) => ({
  type: Sequelize.STRING,
  allowNull: false,
});

const email = (Sequelize) => ({
  type: Sequelize.STRING,
  allowNull: false,
});

const address = (Sequelize) => ({
  type: Sequelize.STRING,
  allowNull: false
});

const zipCode = (Sequelize) => ({
  type: Sequelize.STRING,
  allowNull: false
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clients', {
      id: id(Sequelize),
      idUser: idUser(Sequelize),
      name: name(Sequelize),
      lastName: lastName(Sequelize),
      fone: fone(Sequelize),
      birthDate: birthDate(Sequelize),
      email: email(Sequelize),
      address: address(Sequelize),
      zipCode: zipCode(Sequelize),
    });
  },

  down: async (queryInterface) => queryInterface.dropTable('Clients'),
};
