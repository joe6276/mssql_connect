const express =require('express')
require('dotenv').config();
const cors =require('cors')

const mysql= require("mysql2")

const app = express();
app.use(express.json())
app.use(cors())

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD
}
)





app.get('/students',(req ,res)=>{
    let sql = 'select * from students'
    pool.execute(sql, function(err,result){
    if(err) throw err

    res.send (result);
})
})

app.post('/student',(req ,res)=>{

    const{ names, email} = req.body;
    let sql = `INSERT INTO students(names,email) VALUES('${names}','${email}')`
    pool.execute(sql, function(err,result){
        if(err) throw err
    
        res.send('Data Successfully Inserted');
    })
})


app.put('/student/:id',(req ,res)=>{
    const id= req.params.id
    const{ names, email} = req.body;
    let sql = `UPDATE students
    SET names='${names}',email='${email}' WHERE id =${id}`
    pool.execute(sql, function(err,result){
        if(err) throw err
    
        res.send('Data Successfully Updated');
    })
})


app.delete('/student/:id',(req ,res)=>{
    const id = req.params.id
    
    let sql = `DELETE FROM students  WHERE id =${id}`
    pool.execute(sql, function(err,result){
        if(err) throw err
    
        res.send('Data Successfully Deleted');
    })
})

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log("App is running on port "+ port)
})