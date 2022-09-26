// //requests express package -- exports a function and assigned to 'express' variable
const express = require('express');
// const morgan = require('morgan');
// const {Prohairesis} = require('prohairesis');
// const bodyParser = require('body-parser')
const path = require('path');

const app = express();
 
// const contactsRouter = require('./contacts/contacts.router');

app
  // .use(morgan('dev'))
// app.use(bodyParser.urlencoded({ extended: false}))
  // .use(bodyParser.json())

// app.use(express.urlencoded({ extended: false }))
  
app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('public'))

app.get('/contact', (req,res) => {
  res.sendFile(path.resolve('./public/contact.html'))
})

app.post('/contact', (req,res) => {
  res.json(req.body)
  // console.log(req.body)
})


// app.use('/contact', contactsRouter);

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

