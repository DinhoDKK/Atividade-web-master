'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albuns', [{
      nome: 'João',
      cpf: '111.222.333-44',
      tel: '6711112222',
      email: 'joao@gmail.com',
      estado: 'MS',
      cidade: 'Sidrolândia',
      data_nascimento: '2000-01-01',
      titulo_foto: 'foto-joao',
      nome_fotografo: 'joao',
      nome_foto: 'joao-foto',
      nome_responsavel: '',
      cpf_responsavel: '',
      data_autorizacao: new Date(),      
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});

  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
