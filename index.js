const express = require('express')
const path = require('path')
const app = express()
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const PORT = 9001  

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

mongoose.connect('mongodb://127.0.0.1:27017/blogji')
.then((e)=>console.log('mongoo connected'))


app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.render('home')
})

app.use('/user',userRoutes)
app.listen(PORT, ()=> console.log(`Server started ${PORT}`))