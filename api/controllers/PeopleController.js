const database = require('../models');

class PeopleController{
    static async getPeople(req, res){
        try {
            const allPeople = await database.Pessoas.findAll()
            return res.status(200).json(allPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPersonById(req, res){
        try {
            const { id } = req.params;
            const person = await database.Pessoas.findOne( {where: { id: Number(id) } } );
            return res.status(200).json(person);
        } catch (error) {
            return res.status(404).send(error.message);
        }
    }

    static async createPerson(req, res){
        try {
            const body = req.body;
            const newPerson = await database.Pessoas.create(body);
            return res.status(201).json(newPerson);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PeopleController