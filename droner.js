var arDrone = require('ar-drone');
var client  = arDrone.createClient({ip: '192.168.0.18'});

client.takeoff();

client
  .after(5000, function() {
    this.clockwise(0.5);
  })
  .after(3000, function() {
    this.stop();
    this.land();
  });