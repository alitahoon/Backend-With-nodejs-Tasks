const express = require('express');
const  Jwt = require('jsonwebtoken');
const app = express()
const port = 7000
const fs = require('fs')

var secrete = fs.readFileSync('secrete.key');

app.get('/api', (req, res) => {
  res.send('Hello World!')
})


  //username + passwordالخطوة الاولي هبعت ال 
app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: "ali", 
        password: "123456789"
    }
// صحusername + password الخطوه التانيه هتأكد ان ال

    Jwt.sign({user}, secrete, (err, token )=>{
        if(err){
            res.json({message:"username or pass not correct"})
        }
        res.json({token})
    })
  })
// authorization عشان يتأكد من ال 

  app.post('/api/posts',verifytoken, (req, res) => {
    Jwt.verify(req.token, secrete, (err, data)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({message: "post created", data});
        }
        
    })
    
  })


function verifytoken(req, res, next){
    //format of token => authorization: Bearer<token>
    const bearerheader = req.headers['authorization'];
    if(typeof bearerheader !== 'undefined'){
        //split token
        const bearer = bearerheader.split(' ');
        //get token from array
        const token = bearer[1]
        //set the token
        req.token = token;
        next();
    }else{ //token في حاله مفيش 
        res.sendStatus(403);

    }

    
}
