const express = require('express');

const router = express.Router();
const controller= require('../controllers/user.controller');// the file which contains all of the functions will be used

//distribute functions 
router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create1', controller.create1);
// router.get('/create2', controller.create2);

router.get('/:id',controller.viewUser);

router.post('/create1',controller.postCreate1);
// router.post('/create2',controller.postCreate2);
// router.get('/matching', controller.match);

module.exports = router;