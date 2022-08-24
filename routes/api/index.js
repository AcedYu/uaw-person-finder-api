const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes.js');

router.use('/employee', employeeRoutes);

module.exports = router;