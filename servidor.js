const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'));

app.get('/', (res,req)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/mysql', (res, req)=>{
    res.sendFile(path.join(__dirname, '/mysql.html'))
})

app.listen(3000, ()=>{
    console.log("Rodando porta 3000");
})
