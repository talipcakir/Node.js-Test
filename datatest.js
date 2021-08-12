////MongoDB test
const mongoose = require('mongoose')

const usersData = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/myUsersDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


////Data Create Test
// usersData.create({
//     userN: 'Talip',
//     umail: 'talip@cakir.info.tr'
// }, (error, post) => {
//     console.log(error, post)
// })

////Data Find test
// usersData.find({}, (error, post) => {
//     console.log(error, post)
// })

//// Data Find ID and Update
// usersData.findByIdAndUpdate('6113d9296a54595dfc9b31a1', {
//     userN: 'Talip Ç.'
// }, (error, post) => {
//     console.log(error, post)
// })