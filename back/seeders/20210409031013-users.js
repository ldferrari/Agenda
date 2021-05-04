'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Testador',
        email: 'test@agenda.com.br',
        password: '$2b$05$3Wey6FQoAdi26Cy9Pr9.zeQVywcPMPypCGlBohb0198cPJRtSIt8i', //senha 123456
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
