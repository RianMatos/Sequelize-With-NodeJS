const database = require('../models')

class LevelController {
  static async getLevels(req, res){
    try {
      const allLevels = await database.Niveis.findAll()
      return res.status(200).json(allLevels)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getLevel(req, res) {
    const { id } = req.params
    try {
      const level = await database.Niveis.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(level)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body
    try {
      const createdNewLevel = await database.Niveis.create(newLevel)
      return res.status(200).json(createdNewLevel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params
    const newInfos = req.body
    try {
      await database.Niveis.update(newInfos, { where: { id: Number(id) }})
      const updatedLevel = await database.Niveis.findOne( { where: { id: Number(id) }})
      return res.status(200).json(updatedLevel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deleted` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = LevelController