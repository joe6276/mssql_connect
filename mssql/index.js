const express=require('express')
const app =express()
app.use(express.json())
app.use('/users',require('./routes/routes'))
app.listen(4005, ()=>{
    console.log(" Running")
})





