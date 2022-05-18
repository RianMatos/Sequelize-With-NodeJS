const { Router } = require('express')
const LevelController = require('../controllers/LevelController')
 
const router = Router()
router
 .get('/levels', LevelController.getLevels)
 .get('/levels/:id', LevelController.getLevel)
 .post('/levels', LevelController.createLevel)
 .put('/levels/:id', LevelController.updateLevel)
 .delete('/levels/:id', LevelController.deleteLevel)
module.exports = router