/**
 * @Author: Your name
 * @Date:   2022-03-31 23:16:48
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-21 23:30:54
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy; 

passport.use(new LocalStrategy( 
  function(username, password, done) { 
    Account.findOne({ username: username }, function (err, user) { 
      if (err) { return done(err); } 
      if (!user) { 
        return done(null, false, { message: 'Incorrect username.' }); 
      } 
      if (!user.validPassword(password)) { 
        return done(null, false, { message: 'Incorrect password.' }); 
      } 
      return done(null, user); 
    }); 
  }));

const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true, useUnifiedTopology: true});

var Zodiac = require("./models/zodiac");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var zodiacsRouter = require('./routes/zodiacs');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({ 
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: false 
})); 
app.use(passport.initialize()); 
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/zodiacs', zodiacsRouter);
app.use('/users', usersRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// passport config 
// Use the existing connection 
// The Account model  
var Account =require('./models/account'); 
 
passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser()); 
passport.deserializeUser(Account.deserializeUser()); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// We can seed the collection if needed on server start
async function recreateDB() {
// Delete everything in Zodiac
  await Zodiac.deleteMany();

  let instance1 = new Zodiac({ zodiac_name: "Leo", zodiac_meaning: 'Lion', lucky_number: 34 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First zodiac sign stored in Zodiac Class")
  });

  let instance2 = new Zodiac({ zodiac_name: "Gemini", zodiac_meaning: 'Dioscuri', lucky_number: 18 });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second zodiac sign stored in Zodiac Class")
  });

  let instance3 = new Zodiac({ zodiac_name: "Aquarius", zodiac_meaning: 'water-carrier', lucky_number: 23 });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third zodiac sign stored in Zodiac Class")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
