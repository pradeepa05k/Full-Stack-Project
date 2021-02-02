var express= require('express');
var app=express();
var bodyParser =require('body-parser');
const path = require('path');
const router = require('./routes/routes');

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended:false}));

app.use(router);
app.listen(4000,()=>{
    console.log("Server is listening 4000");
})

