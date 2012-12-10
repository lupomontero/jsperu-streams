var Stream = require('stream');

// Nuestro propio stream "legible".
var rs = new Stream();
rs.readable = true;

// Un stream al que podemos escribir.
var s = new Stream();
ws.writable = true;
ws.write = function (buf) {};
ws.destroy = function () { ws.writable = false; };
ws.end = function (buf) {
  if (arguments.length) { ws.write(buf); }
  //...
};
