const express = require ('express')
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

mongoose.connect(process.env.DBURL, {useNewUrlParser: true}, ()=>
{console.log('connected to Database')})

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(port, ()=> {console.log('server running on http://localhost:${port}')}) 