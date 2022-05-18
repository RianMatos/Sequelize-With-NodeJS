const database = require('../models')

class TeamController {
  static async getTeams(req, res){
    try {
      const allTeams = await database.Turmas.findAll()
      return res.status(200).json(allTeams)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getTeamById(req, res) {
    const { id } = req.params
    try {
      const team = await database.Turmas.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(team)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createTeam(req, res) {
    const newTeam = req.body
    try {
      const createdNewTeam = await database.Turmas.create(newTeam)
      return res.status(200).json(createdNewTeam)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateTeam(req, res) {
    const { id } = req.params
    const newInfos = req.body
    try {
      await database.Turmas.update(newInfos, { where: { id: Number(id) }})
      const updatedTeam = await database.Turmas.findOne( { where: { id: Number(id) }})
      return res.status(200).json(updatedTeam)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteTeam(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = TeamController