const mssql=require('mssql')
require('dotenv').config()

// connect to db
let config = {
    server: process.env.Server,
    user:  process.env.User,
    database: process.env.Database,
    password: process.env.Password
   ,
  
    options: {
   
       encrypt: false,
      
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
    }

mssql.connect(config).then(pool =>{

    if(pool.connecting){
        console.log('connecting to the database')
    }

    if(pool.connected){
        console.log("connected")
    }
}).catch(e=>console.log(e))
