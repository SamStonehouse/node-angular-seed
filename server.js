var express        = require('express');
var morgan         = require('morgan');
var app            = express();

var pub = __dirname + '/public';
var views = __dirname + '/views';
var port = 8000;

app.use(express.static(pub));
app.use(morgan('dev'));

app.set('views', views);
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(port);
console.log("Now listening on port: " + port);