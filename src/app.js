// //requests express package -- exports a function and assigned to 'express' variable
// const PORT = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const knex = require('../src/db/connection')
const app = express();
// app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded({ extended: true}))
// 

app.use(express.static(__dirname+ '/../public'));

// app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/../public/index.html'));
})

app.get('/contact', (req,res) => {
  res.sendFile(path.resolve(__dirname+'/../public/contact.html'));
})

app.post('/contact/form', (req, res) => {
   knex('contacts').insert({
    fullName: req.body.fullName, 
    emailAddress: req.body.emailAddress,
    phone: req.body.phone,
    formMessage: req.body.formMessage
  })
    .then(() => {
    return res.redirect('/thanks.html');
  })
    .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
    });
})

// Not found handler
app.use((req, res, next) => {
  next({ 
    status: 404, 
    message: `Not found: ${req.originalUrl}` 
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { 
    status = 500, 
    message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;

