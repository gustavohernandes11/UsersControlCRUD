const app = require('express')()
const cors = require('cors')
const db = require('./config/db')
const consign = require('consign')

app.db = db

consign()
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api/validations.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.listen('3000', (req, res) => {
    console.log('Backend funcionando, porta 3000')
})

