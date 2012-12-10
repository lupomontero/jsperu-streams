var Stream = require('stream');
var s = new Stream(), bufLength = 0;

s.writable = true;
s.destroy = function () { s.writable = false; };
s.write = function (buf) {
  bufLength += buf.length;
};
s.end = function (buf) {
  if (arguments.length) { s.write(buf); }
  console.log(bufLength + ' bytes written');
};

process.stdin.pipe(s);
