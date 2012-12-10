var fs = require('fs');
var s = fs.createWriteStream(__dirname + '/testfile.tmp');

s.write('Hello');
s.write('World');
s.end('!');

