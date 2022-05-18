const bodyparser = require('body-parser');
const people = require('./peopleRoutes.js');
const levels = require('./levelsRoute');
const teams = require('./teamsRoute')

module.exports = app => {
    app.use(bodyparser.json());
    app.use(people, levels ,teams);
}