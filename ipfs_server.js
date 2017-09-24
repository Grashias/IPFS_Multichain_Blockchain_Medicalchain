var express=require('express');
var app=express();

var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

var ipfsAPI = require('ipfs-api')
var ipfs = ipfsAPI({host: '10.0.0.7', port: '5002', protocol: 'http'})

app.post('/send',function(req,res){
    var filepath = req.body.filepath;
	var files = [filepath]
	ipfs.files.add(files, function(err, info) {
    //if(err || !res) return console.error(err)
    if(!err){
        console.log(info);
        console.log(info.path);
		console.log(info.hash);
		res.send(info);
	} 
	else{
		res.send(err);
		console.log(info);
	}
})
});


app.post('/get',function(req,res){
    var multihashStr = req.body.hash;
	//console.log(multihashStr);
	//var ipfsPath = ipfs/"+hash+";
	ipfs.files.get(multihashStr, function (err, stream) {
		stream.on('data', (file) => {
			if(!err){
				//console.log(file);
				console.log(file.path);
				var fulldat = file.content.pipe(process.stdout);
				res.send(JSON.parse(fulldat));
			} 
			else{
				res.send(err);
				console.log(err);
			}
		})
	})   
});

app.post('/obj_data',function(req,res){
    var multihashStr = req.body.hash;
	ipfs.object.data(multihashStr, (err, data) => {
	if (!err) {
		//data.toString());
		//console.log(data.toString());
		res.send(data.toString());
	}
	else{
		res.send(err);
		console.log(err);
	}
	})
});

app.post('/cat',function(req,res){
	var multihashStr = req.body.hash;
	ipfs.files.cat(multihashStr, function (err, stream) {
	//console.log(stream);
		stream.on('data', (file) => {
			if(!err){
				console.log(file.toString());
				//var fulldat = file.content.pipe(process.stdout);
				res.send(file.toString());
			} 
			else{
				//res.send(err);
				console.log(err);
			}
		})
	})   
});

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});