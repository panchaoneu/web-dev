const express = require('express');
const app=express();

app.get('/hello', (req,res)=> {
    console.log("hello Chao");
    res.send('hello world from node server');
});

app.listen(4000);
