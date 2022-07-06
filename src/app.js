// //requests express package -- exports a function and assigned to 'express' variable
// const express = require('express');
// const morgan = require('morgan');

// //invokes that function -- which returns an instance of the express application, which is assigned to the 'app' variable
// const app = express();

// app.use(express.json())

// app.get("/contact", (req, res) => {
//     res.json({ data: contact });
//   });

//   app.post("/contact", (req, res, next) => {
//     const { data: { result } = {} } = req.body;
//     const newContact = {
//         id: ++lastContactId,
//         result,
//     }
//     contact.push(newContact);

//     res.status(201).json({ data: newContact });
// });


// //middleware 'morgan' gets invoked first
// app.use(morgan('dev'));

// //exports the express application -- to be used in other files
// module.exports = app;