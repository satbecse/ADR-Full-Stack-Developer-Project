// app.js - is the gateway to access the backend 

// Accessing the dependencies 
var express = require('express');
var app = express();     // creating an object for the express.
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json());  //  this is to parse the jason that we receive via post method 

Theme = require('./models/theme');  //.js is not required  .. Theme is an object to access the theme.js code here  
Adr = require('./models/adrs');

//Connecting to mongoose
mongoose.connect('mongodb://localhost/adr-repository');
var db = mongoose.connection;   // creating a database object

app.get('/',function(req,res){     // to handle a http request of the home directory '/'
    res.send('Please use /api/adr');
});

// get all themes
app.get('/api/themes', function(req,res){
    Theme.getThemes(function (err,themes){
        if(err){
            throw err;
        }
        res.json(themes);
    });
});

// create (POST) a theme  
app.post('/api/themes', function(req,res){
    var theme = req.body;                // Here the body parser is getting used.
    Theme.addTheme(theme,function (err,theme){
        if(err){
            throw err;
        }
        res.json(theme);
    });
});

//update the theme
app.put('/api/themes/:_id', function (req, res) {
	var id = req.params._id;
	var theme = req.body;
	Theme.updateTheme(id, theme, {}, function (err, theme) {
		if(err){
			throw err;
		}
		res.json(theme);
	});
});

//delete the theme   ---> not working 
app.delete('/api/themes/:_id', function(req, res) {
//    console.log('I am in delete Theme');
	var id = req.params._id;
	Theme.removeTheme(id, function(err, theme) {
		if(err){
			throw err;
		}
		res.json(theme);
	});
});

// get All ADRs
app.get('/api/adrs', function(req,res){
    Adr.getAdrs(function (err,adrs){
        if(err){
            throw err;
        }
        res.json(adrs);
    });
});

// get an ADR by id 
app.get('/api/adrs/:_id', function(req,res){
    Adr.getAdrById(req.params._id,function (err,adr){
        if(err){
            throw err;
        }
        res.json(adr);
    });
});


// get an ADR by app
app.get('/api/adrs/:_app', function(req,res){
    Adr.getAdrById(req.params._app,function (err,adr){
        if(err){
            throw err;
        }
        res.json(adr);
    });
});


// create (POST) an Adr  
app.post('/api/adrs', function(req,res){
    var adr = req.body;                // Here the body parser is getting used.
    //console.log(adr);
    Adr.addAdr(adr,function (err,adr){
        if(err){
            throw err;
        }
        res.json(adr);
    });
});

//update the ADR
app.put('/api/adrs/:_id', function (req, res) {
	var id = req.params._id;
	var adr = req.body;
	Adr.updateAdr(id, adr, {}, function (err, adr) {
		if(err){
			throw err;
		}
		res.json(adr);
	});
});

//delete the ADR
app.delete('/api/adrs/:_id', function(req, res) {
	var id = req.params._id;
	Adr.removeAdr(id, function (err, adr) {
		if(err){
			throw err;
		}
		res.json(adr);
	});
});


app.listen(3000); //app will listen on port 3000
console.log('Running on port 3000...');

//1.handle errors
//2.Pagination 140 things ,20 page in a page (use limit)
//3.Add Project attribute to ADR
//4.Testing using mocha,chai,sinon 
//5.Gulp
//6.login and signin
//REPL (Read Evalute Print Loop)

//Slack forum 