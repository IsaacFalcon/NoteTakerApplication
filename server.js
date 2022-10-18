const express = require('express');
const path = require('path');
// const api = require('./routes/index.js');
const viewroutes = require('./routing/viewroutes');
const apiroutes = require('./routing/apiroutes');
const PORT = process.env.port || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiroutes);
app.use('/', viewroutes);
app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);