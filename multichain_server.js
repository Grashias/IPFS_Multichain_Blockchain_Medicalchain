let multichain = require("multichain-node")({
    port: 8338,
    host: '10.0.0.7',
    user: "multichainrpc",
    pass: "7Vwy8H8U1aX5jtFYoApcHip5Z46Dmh3qxXMz5y8MLU31"
});

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
//var oracledb = require('oracledb');
//oracledb.maxRows = 50000;
//var dbConfig = require('./dbconfig.js');
require( "console-stamp" )( console, { pattern : "dd/mm/yyyy HH:MM:ss.l" } );

var fs = require('fs')
var app = express();

var d = new Date();		
var datm = d.toLocaleString();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/index.html'));
	res.sendFile(path.join(__dirname + '/public/multi_poc/index.html'));
});

app.post('/streamkeyitems', function (req, res) {
    var streamname = req.body.streamname;
	var key = req.body.key;

	multichain.listStreamKeyItems({stream:streamname, key:key, verbose: false, count:50,start:0},(err, info) => {
    if(err){
        console.log(err);
		//fs.appendFile(error_filepath, datm + " : " + err + "\r\n");
		res.send(err);
    }else{
		var datas = JSON.stringify(info);
		var msg = JSON.parse(datas);
		//console.log(msg[0].data);
		var sa= msg.length;
		var stttt = "";
		for(i=0; i<sa; i++){
			var data1= msg[i].data;
		  if(stttt=="")
		  {
			  stttt=convertFromHex(data1);
		  }			  
			else
			{
				stttt=stttt + "||" + convertFromHex(data1);
			}
		}
		console.log("Latest records retrieved from Multichain");
		//fs.appendFile(output_filepath, datm + " : " + 'Latest records retrieved from Multichain.' + "\r\n");
		res.send(stttt, prim_key);
	}
	});
});

app.post('/streamitems', function (req, res) {
	var streamname = req.body.streamname;
	
	multichain.listStreamItems({stream:streamname, verbose: false, count:50,start:0},(err, info) => {
    if(err){
        console.log(err);
		//fs.appendFile(error_filepath, datm + " : " + err + "\r\n");
		res.send(err);
    }else{
		
		var datas = JSON.stringify(info);
		var msg = JSON.parse(datas);
		
		console.log("Latest records retrieved from Multichain");
		//fs.appendFile(output_filepath, datm + " : " + 'Latest records retrieved from Multichain.' + "\r\n");
		res.send(msg);
	}
	});
});
	
app.post('/addkeyvalue', function (req, res) {
	var streamname = req.body.streamname;
	var key = req.body.key;
	var flag= req.body.flag;
	var data1 = req.body.data;
	var data = convertToHex(data1);
	
	multichain.publish({stream:streamname, key:key, data:data},(err, info) => {
    if(err){
		res.send(err);
		console.log(err);
		//fs.appendFile(error_filepath, datm + " : " + err + "\r\n");
    }else{
			//fs.appendFile(output_filepath, datm + " : " + key + ' record successfully inserted into Multichain.' + "\r\n");
			console.log(key + " record successfully uploaded to IPFS and inserted into Multichain");
			res.send(key + " record successfully uploaded to IPFS and inserted into Multichain");
	}
	});
});

  
function convertToHex(str1) {
    var hex = '';
    for(var i=0;i<str1.length;i++) {
        hex += ''+str1.charCodeAt(i).toString(16);
    }
    return hex;
}

function convertFromHex(hex) {
    var hex = hex.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}


var server = app.listen(8337, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Mulitichain listening at port 8337, host, port");
})