'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const todosArr = [
      {
        todo: 'Buy groceries',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      },
      {
        todo: 'Walk the dog',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      },
      {
        todo: 'Do laundry',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      },
      // {
      //   todo: 'Wash dishes',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      // },
      // {
      //   todo: 'Clean the house',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      // },
      // {
      //   todo: 'Water the plants',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      // },
      // {
      //   todo: 'Mow the lawn',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      // },
      // {
      //   todo: 'Take out the trash',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      // },
      // {
      //   todo: 'Vacuum the floor',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      // },
      // {
      //   todo: 'Wash the car',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwgPYeBOvSFpYCi1AkpP-ROAtr4r2K2tkAg&s',
      // },
      // {
      //   todo: 'Clean the bathroom',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-78liqNLZg0ghgYK-e4OUhC9MGFEuaCVUA&s',
      // },
    ];

    await queryInterface.bulkInsert(
      'Todos',
      todosArr.map(({ todo, img }) => ({
        todo,
        done: false,
        img,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
