var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log('app started at 3000');
});

app.use("/styles",  express.static(__dirname + '/styles'));
app.use("/app", express.static(__dirname + '/app'));
app.use("/lib",  express.static(__dirname + '/lib'));
app.use("/images",  express.static(__dirname + '/images'));
app.use("/app/tpl",  express.static(__dirname + '/app/tpl'));

app.get('/', function (req, res) {
      res.sendfile(__dirname + '/index.html');
});