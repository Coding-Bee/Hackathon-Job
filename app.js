var express     = require('express');
var app         = express();
var port        = process.env.PORT || 3000;
var mongoose    = require('mongoose');
var passport    = require('passport');
var flash       = require('connect-flash');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var methodOverride = require('method-override');
mongoose.connect('mongodb://localhost/jobs', {useNewUrlParser: true, useUnifiedTopology: true });
var configDB = require('./config/databse.js');
mongoose.connect(configDB.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useUnifiedTopology:true
});

require('./config/passport')(passport);


app.use(session({secret: 'JobsAreEasy'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes.js')(app, passport);



app.listen(3000, ()=> console.log(`Server started at ${port}`));