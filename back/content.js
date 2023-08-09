const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sampleSchema = new Schema({

    name:{
        type: 'string',
        required: true
    },
    age:{
        type: 'number',
        required: true
    }
})
const project = mongoose.model('Project', sampleSchema)
module.exports = project