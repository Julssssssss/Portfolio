const express =require('express')
const bParser = require('body-parser')
const app = express()
const cors = require('cors')
const mongoose=require("mongoose")
const infos = require('./content.js')
const data = require('./dynamic.json')

// for monngodb server
//mongoose.connect("mongodb+srv://julianna:fIPfoGIezIczA3SC@cluster0.1sfbgud.mongodb.net/project?retryWrites=true&w=majority")
//.then((result) => console.log('connected'))

app.use(cors());
app.listen(3000)
app.use(express.json())
//app.use(bParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.get('/content',async(req, res) => {
    const sample =[data]
    res.json(sample)
})


