const express = require('express');
const router = express.Router();
const path = require('path');

var connection = require('../model/database');


router.get('/',function(req,res){
    console.log("Home");
res.sendFile(path.join(__dirname,'../','Public/views/StudentLogin.html'));

})
router.get('/login',function(req,res){
    // console.log("Login");
res.sendFile(path.join(__dirname,'../','Public/views/StudentLogin.html'));

})

router.get('/signup',function(req,res){
    // console.log("Register");
res.sendFile(path.join(__dirname,'../','Public/views/StudentRegister.html'));

})

router.get('/success',function(req,res){
    // console.log("Success");
res.sendFile(path.join(__dirname,'../','Public/views/Success.html'));

})


router.use('/signupValidate',function(req,res){
    console.log('validated', req.body);
    var Uname= req.body.NAME;
    var email=req.body.EMAIL;
    var rollno=req.body.ROLLNO;
    var pwd=req.body.PASSWORD;
    var gen=req.body.GENDER;
    
    connection.query('insert into StudentInfo values(?,?,?,?,?)',[Uname,rollno,email,pwd,gen],(err,results)=>{
        if(err) throw err;
        if(results){
            console.log("Values Inserted");
            res.sendFile(path.join(__dirname,'../','Public/views/StudentLogin.html'));
        }
    })
    
    })
    

router.post('/validate',function(req,res){
    var email=req.body.Email; 
    var pwd=req.body.password;

    connection.query('select email from StudentInfo where email like ?',[email],(err,results)=>{
        if (err) throw err;
        if(results){
            connection.query('select password from StudentInfo where email like ? and password like ?',[email,pwd],(err,results)=>{
                if(err) throw err;
                if(results)
                    res.sendFile(path.join(__dirname,'../','Public/views/Success.html'));
            })
        }
    })

})

module.exports = router;