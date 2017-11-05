var arDrone = require('ar-drone');
var client  = arDrone.createClient(ip: {'192.168.0.18'});
client.createRepl();