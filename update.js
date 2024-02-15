mysql = require('mysql')

conn = mysql.createConnection({host:'localhost',user:"root",password:"",database:"student"})

conn.connect((error)=>{
    if(error) throw error
    console.log('connection successfully')
    update = "update lado set name='pushpa' where name='pihu'"
    conn.query(update,(error)=>{
        if (error) throw error
        console.log('Update  successfully')
    })
})