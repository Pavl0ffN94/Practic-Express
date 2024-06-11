const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

const linkShema = new mogoose.Schema({
    code: String,
    source: String,
    short: String,
    date:{type:String, default:Date.now()}
})
module.exports = mongoose.model('Link', linkShema)