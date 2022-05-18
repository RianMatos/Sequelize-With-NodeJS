const { Router } = require('express')
const TeamController = require('../controllers/TeamController.js')
 
const router = Router()

router
 .get('/teams', TeamController.getTeams)
 .get('/teams/:id', TeamController.getTeamById)
 .post('/teams', TeamController.createTeam)
 .put('/teams/:id', TeamController.updateTeam)
 .delete('/teams/:id', TeamController.deleteTeam)

module.exports = router