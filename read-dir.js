var fs = require('fs');
fs.readdir('./',function(err,data){
	if (err)
		console.log(err);
	if(data)
		console.log(data);
});
