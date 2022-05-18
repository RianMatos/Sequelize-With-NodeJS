const  express = require('express')
const bodyParser =require('body-parser')
const routes = require('./routes')

const app = express()

routes(app)

const port = 3000

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app