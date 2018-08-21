//express-endpoint-demo.js
var express = require('express');
var fs = require('fs');
var app = express() ;
app.use('/message',function(req,res){
	console.log('user requested endpoint') ;
	res.send('The request is served');
});

app.use('/users',function(req,res){
	fs.readFile('./data.json',function(err,data){
		if(err)
			console.log(err);
		else{
			var JsonData = JSON.parse(data);
			res.send(data);
		}

	});
});

app.listen(3000);