const

  createError = require('http-errors');
  express = require('express');
  path = require('path');
  cookieParser = require('cookie-parser');
  logger = require('morgan');
  playersController = require('./controllers/playersController')
  roomsController = require('./controllers/roomsController')
  mongoose = require( 'mongoose' );

var indexRouter = require('./routes/index');/*
var usersRouter = require('./routes/users');*/
var hostRouter = require('./routes/host');/*
var joinRouter = require('./routes/join');
var lobbyRouter = require('./routes/lobby');*/
//var playersRouter = require('./routes/players'),


var app = express();

mongoose.connect( 'mongodb://localhost/Telephone' );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected!")
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);/*
app.use('/users', usersRouter);*/
//app.use('/host', hostRouter);
/*
app.use('/join', joinRouter);
app.use('/lobby', lobbyRouter);*/


//console.dir(playersController.getAllplayers)
//console.dir(playersCntroller)
app.get('/players', playersController.getAllPlayers );
app.post('/savePlayer', playersController.savePlayer );/*
app.get('/rooms', roomsController.getAllRooms );
app.post('/saveRoom', roomsController.saveRoom);*/


app.use('/host', function(req, res, next) {
  console.log("in /host controller")
  res.render('host');
});

app.use('/join', function(req, res, next) {
  console.log("in /join controller")
  res.render('join');
});


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
