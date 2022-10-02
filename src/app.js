// //requests express package -- exports a function and assigned to 'express' variable
const express = require('express');
// const morgan = require('morgan');
// const {Prohairesis} = require('prohairesis');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
// const db = require('../src/db')
const knex = require('../src/db/connection')
 
// const contactsRouter = require('./contacts/contacts.router');

// app
  // .use(morgan('dev'))
  // .use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))
// app.use(bodyParser.json())

// app.use(express.json());

// app.use(express.urlencoded());
app.use(express.static('public'))
//


app.get('/contact', (req,res) => {
  res.sendFile(path.resolve(__dirname+'../../public/contact.html'));
})

app.post('/contact/form', (req, res) => {
  // const insertData = {
  //   fullName: req.body.fullName,
  //   emailAddress: req.body.emailAddress,
  //   phone: req.body.phone,
  //   formMessage: req.body.formMessage,
  // }
//   const name = req.body.fullName;
//   const email = req.body.emailAddress;
//   const phoneNumber = req.body.phone;
//   const form = req.body.formMessage;

// if (!name) {
//     return res.json({success: false, message: 'Name is required'});
// }

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

