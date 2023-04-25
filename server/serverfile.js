var express = require('express')
var fs = require('fs');
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require('body-parser');
const ctj = require('csvtojson')
var app = express()
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const {Parser} =require("json2csv")
app.use(express.json())
var fs = require('fs');
let data =[{id:1,name:"hanu"},{id:2,name:"hanu1"}]
app.get('/getdata',function(req,res){
    res.send(data);
})



app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})


app.post('/jsontocsv',function(req,res){
    const parser = new Parser();
    const csv = parser.parse(data)
    console.log(csv);

    fs.writeFileSync(req.body.filename,csv,"utf8")
    res.send(csv)
   })

   app.get('/download',function(req,res){
    ctj()
    .fromFile('ram.csv')
    .then(users => {
      
      console.log(users)
    })
    .catch(err => {
      // log error if any
      console.log(err)
    })

   
    const user = req?.query?.username;
    console.log(user);
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
   let cartitem=[]
  
    add1.map(d=>{
        if(user === d.username){
                cartitem.push(d);
        }
    }) 
   
    const parser = new Parser();
    const csv = parser.parse(cartitem)
      res.attachment('product.csv')
    res.status(200).send(csv)
   })

app.post('/postdata',function(req,res){
    res.send(req.body)
   })
app.post('/addtocart',function(req,res){
    fs.appendFileSync('./data/addtocart.json', JSON.stringify(req.body),"utf8")
    fs.appendFileSync('./data/addtocart.json', "\n","utf8")
    
    res.send(req.body)
 })

 
 app.post('/register',function(req,res){
  
  
   let result=fs.appendFileSync('./data/userdata.json', JSON.stringify(req.body),"utf8")
    fs.appendFileSync('./data/userdata.json', "\n","utf8")
    let resultdata=""
    if(!result){
        resultdata={success:true,message:"data insert successfully"}
    }
    else{
        resultdata={success:false,message:"data not insert successfully"}
        
    }
    res.send(resultdata)
 })

 
 app.post('/login',function(req,res){
    let data=fs.readFileSync('./data/userdata.json',"utf8")
    let adddata=[]
    data.split('\n').forEach(d=>{
        adddata.push(d)
    })
    let add1=[]
    adddata.map(d=>{
        if(d!=="")
        add1.push(JSON.parse(d))
    })
    
    let resultlog="";
    add1.map(d=>{
        if(d.username===req.body.email ||d.email===req.body.email && d.password===req.body.password  ){
            resultlog={success:true,message:"user login successfully",data:d}
        }
    })
    if(resultlog){
        res.send(resultlog)
    }
    else{
        res.send({success:false,message:"user not login successfully"})
    }
   
 })

 app.post('/showtocart',function(req,res){
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
   let cartitem=[]
   console.log(req.body.username);
    add1.map(d=>{
        if(req.body.username === d.username){
                cartitem.push(d);
        }
    })
   
    res.send(cartitem)
 })
app.listen(8080,function(err,data){
    if(err){
        console.log(err);
    }
    console.log(`server started ${8080}`);
})