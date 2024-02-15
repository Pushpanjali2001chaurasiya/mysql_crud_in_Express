mysql = require('mysql')

conn = mysql.createConnection({host:'localhost',user:"root",password:""})
conn.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Connection Succeefully')
    }
    conn.query('create database student',(error)=>{
        if(error) throw error
        else{console.log('database create successfully')}
    })
})
