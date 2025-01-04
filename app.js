var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');
var non_authenticated = require('./routes/non-authenticated');
const nodeSassMiddleware = require('node-sass-middleware');
var app = express();

const users = [];
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.json());

app.use(
  nodeSassMiddleware({
    src: path.join(__dirname, 'public/assets'),
    dest: path.join(__dirname, 'public/assets/css'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true,
  }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', non_authenticated);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  err.status == 404 ? res.render('error-404', { layout: false }) : res.render('error-400', { layout: false });
});

module.exports = app;
