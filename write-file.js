var fs = require('fs');
var obj = {
	name:"afshin",
	age:40
};
var json = JSON.stringify(obj);
fs.writeFile('./testfile.data',json,'utf-8',(err)=>{
	if (err)
		console.log('file is not writen');
});