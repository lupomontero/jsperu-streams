// # EventEmitter

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var MyEmitter = function () {
  var self = this, veces = 0;
  self.iv = setInterval(function () {
    self.emit('data', ++veces);
  }, 500);
};

util.inherits(MyEmitter, EventEmitter);

MyEmitter.prototype.kill = function () {
  clearInterval(this.iv);
  this.emit('end');
};

var ee = new MyEmitter();
ee.on('data', function (data) { console.log(data); });
setTimeout(function () { ee.kill(); }, 5*1000);
