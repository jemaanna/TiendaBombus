const mysql = require('mysql');
const myConnection = require('express-myconnection');



const conection = myConnection(mysql, {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "bombus"
},"single");


if (conection) {
    console.log("DB is Connect");
}

module.exports = conection;
