var express = require('express')
var fs = require('fs');
var app = express()
app.use(express.json())
app.get('/',function(req,res){
    res.sendFile('./data/data.js');
})

function readFile( url ){
    fs.readFile(url, 'utf8', function( err, data ){
        if ( err ) {
            console.log( 'error', err );
        } else {
            console.log('file read');
            return data;
        }
    });
}
app.post('/postdata',function(req,res){
    res.send(req.body)
   })
app.listen(8080,function(err,data){
    if(err){
        console.log(err);
    }
    console.log(`server started ${8080}`);
})