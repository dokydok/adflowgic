var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');


// Database
var mongoose = require('mongoose');
mongoose.connect("mongodb://adflowgic:adflowgic@dogen.mongohq.com:10090/adflowgic");


//Require all the models
fs.readdirSync(__dirname + '/models').forEach(function(filename){
    if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename);
});

var routes = require('./routes/index');
var users = require('./routes/users');

var  advertisers = require('./routes/advertisers');
var  networks= require('./routes/networks');
var  media= require('./routes/media');
var  media_containers= require('./routes/media_containers');
var  layouts= require('./routes/layouts');
var  broadcast_logs= require('./routes/broadcast_logs');
var  schedules= require('./routes/schedules');
var  events = require('./routes/events');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/

app.use('/', routes);
app.use('/users', users);
app.use('/advertisers', advertisers);
app.use('/networks', networks);
app.use('/events', events);
app.use('/media', media);
app.use('/media_containers', media_containers);
app.use('/layouts', layouts);
app.use('/broadcast_logs', broadcast_logs);
app.use('/schedules', schedules);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
 //   mongoose.connect("mongodb://localhost:27017/adflowgic");
 //   mongoose.connect("mongodb://ddumansky@gmail.com:xVpsyh4f@dogen.mongohq.com:10090/adflowgic");

    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });

}
if (app.get('env') === 'production') {
  //  mongoose.connect("mongodb://ddumansky@gmail.com:xVpsyh4f@dogen.mongohq.com:10090/adflowgic");
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
