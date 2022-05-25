const express=require("express");
const { hostname } = require("os");
const app=express();
const port=5000;
const path = require('path');
const logger=require("./middleware/logger");
//server listen
app.listen(port,"127.0.0.1",()=>{
    console.log("server running....")
})



//print url info
app.use(logger);

// sendFile 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });