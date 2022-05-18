const{ Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');
const router = Router();

router.get('/people', PeopleController.getPeople);
router.get('/people/:id', PeopleController.getPersonById);
router.get('/people/:studentId/registration/:registrationId', PeopleController.getRegistration);
router.post('/people', PeopleController.createPerson);
router.post('/people/:studentId/registration', PeopleController.registrationCreate)
router.put('/people/:id', PeopleController.updatePerson);
router.put('/people/:studentId/registration/:registrationId', PeopleController.updateRegistration);
router.delete('/people/:id', PeopleController.deletePerson);
router.delete('/registration/:id', PeopleController.deleteRegistration);

module.exports = router