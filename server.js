const express = require('express');
const path = require('path');
const viewroutes = require('./routing/viewroutes');
const apiroutes = require('./routing/apiroutes');
const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiroutes);
app.use('/', viewroutes);
app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);