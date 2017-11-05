var express = require('express');
var app = express();
var path = require('path');
var ffmpeg = require('ffmpeg');
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var arDrone = require('ar-drone');
var client = arDrone.createClient({ip: '192.168.0.18'});

app.get('/land', function(req, res) {
 client.land();
});

app.get('/takeoff', function(req, res) {
 client.takeoff();
});

// app.get('/getPngStream', function(req, res) {
//  client.getPngStream();
// });

client.on('navdata', console.log);

// var pngStream = client.getPngStream();
// pngStream.on('data', console.log);
// try {
// 	var process = new ffmpeg('/Users/rmukherj/Development/nodejs_drone/node_modules/ar-drone/lib/video/');
// 	process.then(function (video) {
// 		console.log('The video is ready to be processed');
// 	}, function (err) {
// 		console.log('Error: ' + err);
// 	});
// } catch (e) {
// 	console.log(e.code);
// 	console.log(e.msg);
// }



// var pngStream = client.getPngStream();

// pngStream
//  .on('error', console.log)
//  .on('data', function(pngBuffer) {
//        sendPng(pngBuffer);
//  })

// function sendPng(buffer) {
//  res.write('--daboundary\nContent-Type: image/png\nContent-length: ' + buffer.length + '\n\n');
//  res.write(buffer);
// };

 app.listen(8384, function () {
});


