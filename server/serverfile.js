var express = require('express')
var fs = require('fs');
var app = express()
app.use(express.json())

app.get('/',function(req,res){
    res.write("heiil")
})

app.listen(8080,function(err,data){
    if(err){
        console.log(err);
    }
    console.log(`server started ${8080}`);
})