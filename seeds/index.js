const sequelize = require('../config/connection');
const { Employee } = require('../models');

const employeeData = require('./employee.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const employees = await Employee.bulkCreate(employeeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();