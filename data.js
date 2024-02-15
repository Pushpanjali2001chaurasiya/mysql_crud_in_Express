mysql = require('mysql')

conn = mysql.createConnection({host:'localhost',user:"root",password:"",database:"student"})

conn.connect((error)=>{
    if(error) throw error
    console.log('connection successfully')
    data = "insert into lado value(01,'pihu',23,'pihu@gmail.com')"
    conn.query(data,(error)=>{
        if (error) throw error
        console.log('Data inserted successfully')
    })
})