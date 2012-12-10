var Stream = require('stream');
var s = new Stream();

s.readable = true;

var times = 0;
var iv = setInterval(function () {
  s.emit('data', times + '\n');
  if (++times === 5) {
    s.emit('end');
    clearInterval(iv);
  }
}, 1000);

s.pipe(process.stdout);
