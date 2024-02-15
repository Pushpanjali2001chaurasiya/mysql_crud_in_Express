mysql = require('mysql')

conn = mysql.createConnection({host:'localhost',user:"root",password:"",database:"student"})

conn.connect((error)=>{
    if(error) throw error
    console.log('connection successfully')
    update = "delete from lado where name = 'pushpa'"
    conn.query(update,(error)=>{
        if (error) throw error
        console.log('Deleted successfully')
    })
})