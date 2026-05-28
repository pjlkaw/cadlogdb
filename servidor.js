require('dotenv').config()
const express = require('express')
const path = require('path')
const mysql = require('mysql2')

const app = express()
app.use(express.static('public'));
app.use(express.json());

// MYSQL 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: 'P#dro098', // process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})
db.connect((err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("MySQL Conectado");
})

// API
app.post('/api', (req,res)=>{
    const { user, password } = req.body

    const sql = 'INSERT INTO users (user, password) VALUES ( ? , ? )'

    db.query(sql, [user, password], ()=>{
        res.json({
            mensagem: 'ok'
        })
    })
    console.log(req.body);
    
})
app.get('/api', (req,res)=>{
    const sql = 'SELECT * FROM users'
    db.query(sql, (err, result)=>{
        res.json(result)
    })
})

// PAGINAS
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/mysql', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'MySQL', 'mysqlindex.html'))
})

app.listen(3000, ()=>{
    console.log("Rodando porta 3000");
})
