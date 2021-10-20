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
      nome_foto: 'joao.jpg',
      nome_responsavel: '',
      cpf_responsavel: '',
      data_autorizacao: new Date(),      
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});

    await queryInterface.bulkInsert('Albuns', [{
      nome: 'Jose da silva',
      cpf: '222.555.366-43',
      tel: '67324254324',
      email: 'jose@gmail.com',
      estado: 'MS',
      cidade: 'Campo grande',
      data_nascimento: '1997-01-12',
      titulo_foto: 'foto-jose',
      nome_fotografo: 'Zezin',
      nome_foto: 'jose.jpg',
      nome_responsavel: '',
      cpf_responsavel: '',
      data_autorizacao: new Date(),      
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});

    await queryInterface.bulkInsert('Albuns', [{
      nome: 'Maria da silva',
      cpf: '789.123.875-32',
      tel: '6709834751',
      email: 'mariasilva@gmail.com',
      estado: 'MS',
      cidade: 'Nova Andradina',
      data_nascimento: '2006-06-11',
      titulo_foto: 'foto da maria',
      nome_fotografo: 'Mae da maria',
      nome_foto: 'maria.jpg',
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
