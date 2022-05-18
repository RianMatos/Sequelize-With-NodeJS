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
        const { id } = req.params;
        try {
            const person = await database.Pessoas.findOne( {where: { id: Number(id) } } );
            return res.status(200).json(person);
        } catch (error) {
            return res.status(404).send(error.message);
        }
    }

    static async createPerson(req, res){
        const body = req.body;
        try {
            const newPerson = await database.Pessoas.create(body);
            return res.status(201).json(newPerson);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePerson(req, res){
        const body = req.body;
        const { id } = req.params;
        try {
            await database.Pessoas.update(body, {where: { id: Number(id) } });
            return res.status(200).json('Updated');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePerson(req, res){
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({where: { id: Number(id) } });
            return res.status(200).json('Deleted');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PeopleController