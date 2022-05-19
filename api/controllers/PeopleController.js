const database = require('../models');

class PeopleController{
    static async getPeopleActive(req, res){
        try {
            const allPeopleActive = await database.Pessoas.findAll()
            return res.status(200).json(allPeopleActive);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPeople(req, res){
        try {
            const allPeople = await database.Pessoas.scope('all').findAll()
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
            return res.status(404).json(error.message);
        }
    }

    static async restorePerson(req, res){
        const { id } = req.params;
        try {
            await database.Pessoas.restore({where: {id: Number(id)}});
            return res.status(200).json('Restored');
        } catch (error) {
            return res.status(404).json(error.message);
        }
    }

    static async getRegistration(req, res){
        const { studentId, registrationId } = req.params;
        try {
            const registration = await database.Matriculas.findOne({
                where: {id: Number(registrationId), 
                        estudante_id: Number(studentId)
                    }})
            return res.status(200).json(registration);
        } catch (error) {
            return res.status(404).json(error.message);
        }
    }

    static async registrationCreate(req, res){
        const { studentId } = req.params;
        const newRegistration = {...req.body, estudante_id: Number(studentId)};
        try {
            const createdNewRegistration = await database.Matriculas.create(newRegistration);
            return res.status(201).json(createdNewRegistration);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateRegistration(req, res){
        const body = req.body;
        const { studentId, registrationId } = req.params;
        try {
            await database.Matriculas.update(body, {where:
                 {id: Number(registrationId), estudante_id: Number(studentId)}
                });
            const updatedRegistration = await database.Matriculas.findOne({where:
                {id: Number(registrationId), estudante_id: Number(studentId)}
               })
            return res.status(200).json(updatedRegistration);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteRegistration(req, res){
        const { id } = req.params;
        try {
            await database.Matriculas.destroy({where: { id: Number(id) } });
            return res.status(200).json('Deleted');
        } catch (error) {
            return res.status(404).json(error.message);
        }
    }

}

module.exports = PeopleController