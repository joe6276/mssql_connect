const mssql=require('mssql')
const config= require('../config/db')

async function getUsers(req,res){
    try {
        let pool= await mssql.connect(config)
        let users= await pool.request().
        query("SELECT * FROM users")

        return res.json(users.recordsets[0])
        

    } catch (error) {
        console.log(error)
        
    }
}



async function getUser(req,res){

    const id =req.params.id;

    try {
        let pool= await mssql.connect(config)
        let user= await pool.request().
        query(`SELECT * FROM users WHERE id=${id}`)

        return res.json(user.recordsets[0])
        

    } catch (error) {
        console.log(error)
        
    }
}
    async function addUser (req,res){
        const{ names, email}= req.body;
        try {
           let pool= await mssql.connect(config)
           await pool.request().
           query(`INSERT INTO users(firstname, email) VALUES ('${names}', '${email}')`)
            res.json("Data INserted successfully")
        } catch (err) {
            console.log(err.message)
        }
    }


    async function updateUser (req,res){
        const{ names, email}= req.body;
        const id = req.params.id
        try {
           let pool= await mssql.connect(config)
           await pool.request().
           query(`UPDATE users SET firstname='${names}', email='${email}' WHERE id=${id}`)
            res.json("Data updated ")
        } catch (err) {
            console.log(err)
        }
    }


    async function deleteUser(req,res){

        const id =req.params.id;
    
        try {
            let pool= await mssql.connect(config)
            await pool.request().
            query(`DELETE FROM users WHERE id=${id}`)
            return res.json("User Deleted")
    
        } catch (error) {
            console.log(error)
            
        }
    }

 module.exports={
     getUsers,
     getUser,
     addUser,
     deleteUser,
     updateUser
 }