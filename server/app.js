var express = require('express'),
	app 	= express(),
	path	= require('path'),
	bodyParser = require('body-parser'),
	server	= require('http').createServer(app);

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');


var inputs = [{username: 'admin', password: '1234'}];
var login = [{username: 'admin', password: '1234'}]

app.get('/', function(req, res){
	//request object is from client, the response is what we are sending back
	res.render('newUser')
})

app.post('/index_submit', function(req, res){
	console.log(req.body);
	inputs.push({username: req.body.username, password: req.body.password});
	console.log(inputs);
	res.render('index');
})

app.post('/login', function(req, res){
	console.log(req.body);
	login.push({username: req.body.username, password: req.body.password});
	if(login === inputs){
		res.render('animalCalls');
	}else{
		res.render('index');
		
	}
})


//first arguemt is the port number
server.listen(3000, function(){
	console.log('server is listeing on port 3000');
})