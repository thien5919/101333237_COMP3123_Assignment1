const express = require('express');
const router = express.Router();
const { signup, login } = require('../controller/userController');
const { 
    getAllEmployees, 
    createEmployee, 
    getEmployeeById, 
    updateEmployee, 
    deleteEmployee, 
    updateEmployeeById,
    deleteEmployeeById
} = require('../controller/employeeController');

// User Routes
router.post('/user/signup', signup);
router.post('/user/login', login);

// Employee Routes
router.get('/emp/employees', getAllEmployees);
router.post('/emp/employees', createEmployee);
router.get('/emp/employees/:eid', getEmployeeById);
router.put('/emp/employees/:eid', updateEmployeeById);
router.delete('/emp/employees', deleteEmployeeById);

module.exports = router;
