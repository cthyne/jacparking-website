// //sets the variable 'port' to be equal wo whatever value is found inside of process.ENV -- OR default to '5000' if no value is found
// //a port is a way to have multiple applications running on the same machine
// const {port=5000} = process.env;

// //requires that the express application that is exported from 'app.js'
// const app = require('./app');

// //calls the 'listen' method on the express application & is what runs the server -- takes 2 arguments: port # and listener function 
// // 'port' variable defines where the server should run 
// // 'listener' function is a callback function & will get called as soon as the server has successfully started 
// app.listen(port, () => {
//     console.log(`Server is running on port number ${port}`)
// });

let sqlite3 = require('sqlite3').verbose();
let express = require('express');
let http = require('http');
let path = require("path");
let bodyParser = require('body-parser');
let helmet = require('helmet');
let rateLimit = require("express-rate-limit");