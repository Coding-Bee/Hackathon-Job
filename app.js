var express     = require('express');
var app         = express();
var port        = process.env.PORT || 3000;
var mongoose    = require('mongoose');
var bodyParser   = require('body-parser');

var configDB = require('./config/databse.js');
mongoose.connect(configDB.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useUnifiedTopology:true
});

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));



app.listen(3000, ()=> console.log(`Server started at ${port}`));