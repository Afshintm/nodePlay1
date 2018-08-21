var fs = require('fs');
var data=require('./data.json');

//console.log(JSON.parse(data).name);

fs.readFile('./data.json','utf8',function(err,data){
	if(err)
		console.log(err);

	if (data){
		data = JSON.parse(data);
		console.log(data.name);
	}
		
});