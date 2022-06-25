const mysql = require('mysql2-promise')();
//or  const mysql = require('mysql');
mysql.configure({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "prueba_uc"
});

module.exports= mysql;


