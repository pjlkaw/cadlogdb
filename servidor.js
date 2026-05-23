const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/mysql', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'MySQL', 'mysqlindex.html'))
})

app.listen(3000, ()=>{
    console.log("Rodando porta 3000");
})
