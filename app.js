const

  createError = require('http-errors');
  express = require('express');
  path = require('path');
  cookieParser = require('cookie-parser');
  logger = require('morgan');
  gamesController = require('./controllers/gamesController')
  phrasesController = require('./controllers/phrasesController')
  storiesController = require('./controllers/storiesController')
  mongoose = require( 'mongoose' );


var http = require("http").Server(app)
var io = require("socket.io")(http)
var indexRouter = require('./routes/index');

/*
io.on("connection", (socket) => {
    console.log("Socket is connected...")
})

var server = http.listen(5000, () => {
    console.log("Well done, now I am listening on ", server.address().port)
})*/

 // here we set up authentication with passport
 const session = require("express-session")
 const passport = require('passport')
 const configPassport = require('./config/passport')
 configPassport(passport)


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

app.use(session({ secret: 'zzbbyanana' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
  res.locals.loggedIn = false
  if (req.isAuthenticated()){
    console.log("user has been Authenticated")
    res.locals.user = req.user
    res.locals.loggedIn = true
    if (req.user){
      if (req.user.googleemail=='tjhickey@brandeis.edu'){
        console.log("Owner has logged in")
        res.locals.status = 'teacher'
      } else {
        console.log('student has logged in')
        res.locals.status = 'student'
      }
    }
  }
  next()
})


app.get('/loginerror', function(req,res){
  res.render('loginerror',{})
})

app.get('/login', function(req,res){
  res.render('login',{})
})

// route for logging out
app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));


app.get('/login/authorized',
        passport.authenticate('google', {
                successRedirect : '/',
                failureRedirect : '/loginerror'
        }));


function isLoggedIn(req, res, next) {
    console.log("checking to see if they are authenticated!")
    // if user is authenticated in the session, carry on
    res.locals.loggedIn = false
    if (req.isAuthenticated()){
      console.log("user has been Authenticated")
      return next();
    } else {
      console.log("user has not been authenticated...")
      res.redirect('/login');
    }
}



app.use('/', indexRouter);

app.get('/players', gamesController.getAllGames);
app.post('/saveGame', gamesController.saveGame);
app.get('/storybuilder', phrasesController.getAllPhrases );
app.post('/savePhrase', phrasesController.savePhrase );
app.get('/voting', storiesController.getAllStories );
app.post('/saveStory', storiesController.saveStory );
/*
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

app.use('/phrasebuilder', function(req, res, next) {
  console.log("in /phrasebuilder controller")
  res.render('phrasebuilder');
});

app.use('/storybuilder', function(req, res, next) {
  console.log("in /storybuilder controller")
  res.render('storybuilder');
});

app.use('/voting', function(req, res, next) {
  console.log("in /voting controller")
  res.render('voting');
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
