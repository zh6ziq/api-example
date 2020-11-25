var express = require('express');
var router = express.Router();
var userController = require('../controllers/users')

router.get('/:id', userController.getUser)
/* GET users listing. */
router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)

router.patch('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router;
