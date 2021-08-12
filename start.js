//Modules Import
const path = require('path')
const express = require('express')
const hand = require('express-handlebars')
const bodyParser = require('body-parser')

//MongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myUsersDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Express
const app = express()

//Server Connection Data
const hostname = '127.0.0.1'
const port = 1001

//Static path dir
app.use(express.static('public_files'))

//View Engine
app.engine('handlebars', hand())
app.set('view engine', 'handlebars')

//Express Body Parser - v4.16+
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//Redirect
const router = require('./routes/main')
app.use('/', router)

//Express Listen set
app.listen(port, hostname, () => {
    console.log(` Server başlatıldı, http://${hostname}:${port}/`)
})



// const { MongoClient } = require('mongoose')
// const uri = "mongodb+srv://dbUser:dbUserPassword@talipcakir.sgarg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// client.connect(err => {
//     const collection = client.db("test").collection("devices")
//     client.close()
// })