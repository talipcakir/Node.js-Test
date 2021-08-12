const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    userN: { type: String, require: true },
    umail: { type: String, require: true },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('usersData', UsersSchema)


//Uzak Bağlantı
//const { MongoClient } = require('mongodb');