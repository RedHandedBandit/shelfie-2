const express = require('express');
require('dotenv').config()
const Ctrl = require('./controller');
const massive = require('massive')

const {CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    app.listen(SERVER_PORT, console.log(`if you are quiet you can hear port ${SERVER_PORT}`))
})

app.get(`/api/inventory`, Ctrl.getAll)
app.post(`/api/product`, Ctrl.create)
