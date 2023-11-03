const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to the nodejs server");
})

app.get('/json',(req,res)=>{
    res.json({"message":"Welcome to the nodejs server in json format."})
})

app.listen(8000);