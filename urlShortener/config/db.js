const mogoose = require('mongoose')
const link= 'mongodb+srv://Pavl0ffn:4815162342@cluster0.jgzxtuo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDb=()=>{
    return mogoose.connect(link)
}

module.exports= connectDb()