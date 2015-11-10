var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var todos = require('./routes/todos');

// Load Express Configuration
require('./expressConfig')(app, express);

/**********
 DATABASE
**********/
mongoose.connect('mongodb://localhost/db_web_app', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

//var players = {};
app.set('views', __dirname + '/../app/views');

app.use("/", express.static("app/"));
app.set('views', __dirname + '/../app/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use("/", express.static("app/"));

app.use('/todos', todos);

app.get('/', function(req, res){
	res.sendFile('index.html', {root: app.settings.views});
});

module.exports = app;