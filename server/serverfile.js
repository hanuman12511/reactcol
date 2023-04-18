var express = require('express')
var fs = require('fs');
var app = express()
app.use(express.json())
var fs = require('fs');
let data =[{id:1,name:"hanu"},{id:2,name:"hanu1"}]
app.get('/getdata',function(req,res){
    res.send(data);
})

app.post('/postdata',function(req,res){
    res.send(req.body)
   })
app.post('/addtocart',function(req,res){
    fs.appendFileSync('./data/addtocart.json', JSON.stringify(req.body),"utf8")
    fs.appendFileSync('./data/addtocart.json', "\n","utf8")
    res.send(req.body)
 })

 app.get('/showtocart',function(req,res){
    let data=fs.readFileSync('./data/addtocart.json',"utf8")
    let adddata=[]
    data.split('\n').forEach(d=>{
        adddata.push(d)
    })
    let add1=[]
    adddata.map(d=>{
        if(d!=="")
        add1.push(JSON.parse(d))
    })
    console.log(add1);
    res.send(add1)
 })
app.listen(8080,function(err,data){
    if(err){
        console.log(err);
    }
    console.log(`server started ${8080}`);
})