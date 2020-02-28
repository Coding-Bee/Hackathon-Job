var express     = require('express');
var app         = express();
var port        = process.env.PORT || 3000;
var mongoose    = require('mongoose');
var bodyParser   = require('body-parser');

app.get('/', (req, res) => res.send('Hello'))


app.listen(3000, ()=> console.log(`Server started at ${port}`));