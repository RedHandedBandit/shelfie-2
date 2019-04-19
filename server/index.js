const express = require('express');
require('dotenv').config()
const Ctrl = require('./controller');
const massive = require('massive')

const {CONNECTION_STRING} = process.env

const app = express()
massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
})

const port = 4000
app.listen(port, console.log(`if you are quiet you can hear port ${port}`))