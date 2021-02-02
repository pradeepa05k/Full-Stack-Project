const mysql = require('mysql');
const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'04Sep98',
    database:'class'
    // port:'3306'
});
connect.connect(function(err){
    if (err) 
        throw err;
    console.log("Connected");
    // var sql = "CREATE TABLE student (name VARCHAR(15), rollNumber VARCHAR(15), email VARCHAR(25), password VARCHAR(12), confirmPassword VARCHAR(12), gender VARCHAR(10)";
    // connect.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");
    // });
});

module.exports=connect;