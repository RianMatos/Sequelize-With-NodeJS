const bodyparser = require('body-parser');
const people = require('./peopleRoutes.js');

module.exports = app => {
    app.use(bodyparser.json());
    app.use(people);
}