const{ Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');
const router = Router();

router.get('/people', PeopleController.getPeople);
router.get('/people/:id', PeopleController.getPersonById);
router.post('/people', PeopleController.createPerson);

module.exports = router