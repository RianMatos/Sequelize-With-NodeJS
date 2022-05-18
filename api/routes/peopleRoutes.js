const{ Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');
const router = Router();

router.get('/people', PeopleController.getPeople);

module.exports = router