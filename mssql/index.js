const express=require('express')
const cors= require('cors')
const app =express()
app.use(cors())
app.use(express.json())
app.use('/users',require('./routes/routes'))
app.listen(4005, ()=>{
    console.log(" Running")
})





