const express = require('express')
const path = require('path')
const app = express()
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const PORT = 9001  

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))


app.get('/',(req,res)=>{
    res.render('home')
})

app.use('/user',userRoutes)
app.listen(PORT, ()=> console.log(`Server started ${PORT}`))